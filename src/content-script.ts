/* https://developers.google.com/youtube/v3/docs/captions/list */

/* They differ from each other in definition and purpose –
captions are designed for viewers who cannot hear the audio in a video,
while subtitles are designed for viewers who can hear,
but do not understand the language being spoken in the video. */

/// <reference path="./translation-languages.ts" />
/// <reference path="./utils.ts" />

interface CaptionTrack {
  baseUrl: string;
  name: { simpleText: string };
  languageCode: string;
}

const targetScriptBeginning = "var ytInitialPlayerResponse = ";
let wantedlanguageCode: string;
let isFiltering: boolean;
let filterBtn: HTMLElement;

chrome.storage.local.get(null, (storage) => {
  ({ wantedlanguageCode } = storage);

  // Triggering the observer
  if (/complete|interactive|loaded/.test(document.readyState)) startObserving();
  else document.addEventListener("DOMContentLoaded", startObserving, false);
});

function startObserving() {
  new MutationObserver((mutationsList: MutationRecord[]) => {
    if (filterBtn) {
      isFiltering = !!wantedlanguageCode && location.hash == "#filtering";
      filterBtn.childNodes[1].nodeValue =
        (isFiltering ? "Stop" : "Start") + " Filtering";
      if (!isFiltering) clearUIBadges();
    }

    for (const mutation of mutationsList)
      for (const el of mutation.addedNodes as unknown as HTMLElement[]) {
        if (el.ariaLabel?.toLowerCase() == "closed captions") addUIBadge(el);
        else if (el.id == "filter-menu") setTimeout(() => addUIFilter(el), 500);
      }
  }).observe(document.body, {
    childList: true,
    subtree: true,
  });
}

async function addUIFilter(el: HTMLElement) {
  // Wanted language choice
  let subtitlesBtn = await waitForEl(el, "ytd-toggle-button-renderer");
  subtitlesBtn = subtitlesBtn.parentElement!.appendChild(
    subtitlesBtn.cloneNode()
  ) as HTMLElement;
  subtitlesBtn.classList.add("subtitles-btn");
  subtitlesBtn.textContent = "Subtitles";
  subtitlesBtn.prepend(createImgEl("language.svg"));
  const listEl = document.createElement("div");
  for (const { languageCode, languageName } of translationLanguages) {
    const rowEl = document.createElement("a");
    const langCodeEl = document.createElement("span");
    listEl.appendChild(rowEl).textContent = languageName.simpleText;
    rowEl.appendChild(langCodeEl).textContent = languageCode;

    // Set language
    rowEl.onclick = () =>
      chrome.storage.local.set({ wantedlanguageCode: languageCode }, reload);
  }
  subtitlesBtn.appendChild(listEl).className = "captions-list";

  // Clear language
  if (!wantedlanguageCode) return;
  subtitlesBtn.childNodes[1].nodeValue += ": " + wantedlanguageCode;
  const clearEl = document.createElement("span");
  subtitlesBtn.parentElement!.appendChild(clearEl).innerHTML = "&nbsp;❌";
  clearEl.style.cursor = "pointer";
  clearEl.onclick = () => chrome.storage.local.clear(reload);

  // Enable/Disable filtering
  filterBtn = subtitlesBtn.parentElement!.appendChild(
    subtitlesBtn.cloneNode()
  ) as HTMLElement;
  filterBtn.append(createImgEl("filter.svg"), document.createTextNode(""));
  filterBtn.style.cursor = "pointer";
  filterBtn.onclick = () => {
    let newLocation = location.href.replace(/&.*/, "");
    if (!isFiltering) newLocation += "&sp=EgIoAQ%253D%253D#filtering";
    location.href = newLocation;
  };
}

async function addUIBadge(badge: HTMLElement) {
  let video = badge.closest("ytd-video-renderer") as HTMLElement;
  const isYoutubeSearch = !!video;
  if (!isYoutubeSearch) video = badge.closest("#dismissible") as HTMLElement;
  const thumbnail = video.querySelector("#thumbnail") as HTMLAnchorElement;
  const url = thumbnail.href;
  if (!url) return;

  // Listing CC languages
  const listEl = document.createElement("div");
  const captionTracks = await getCaptionTracks(url);
  for (const caption of captionTracks) {
    const rowEl = document.createElement("a");
    rowEl.target = "_blank";
    rowEl.href = decodeURI(caption.baseUrl);
    listEl.appendChild(rowEl).textContent = caption.name.simpleText;
    rowEl.appendChild(createImgEl("download.svg"));
  }
  badge.appendChild(listEl).className = badge.className + " captions-list";
  badge.classList.add("modified-badge");

  /* Indicators & filtering */
  if (!captionTracks.find((t) => t.languageCode == wantedlanguageCode)) {
    if (isFiltering && isYoutubeSearch) video.remove();
    return;
  }
  const newBadge = badge.cloneNode() as HTMLElement;
  badge.parentElement!.appendChild(newBadge).textContent = wantedlanguageCode;
  newBadge.classList.add("custom-badge");
  newBadge.ariaLabel = "";
  thumbnail.classList.add("custom-thumbnail");
}

function clearUIBadges() {
  // Reverting all changes
  document
    .querySelectorAll(".custom-badge, badge.captions-list")
    .forEach((el) => el.remove());
  document
    .querySelectorAll(".custom-thumbnail, .modified-badge")
    .forEach((el) => el.classList.remove("custom-thumbnail", "modified-badge"));
}

async function getCaptionTracks(url: string): Promise<CaptionTrack[]> {
  for (const script of (await fetchDoc(url)).querySelectorAll("script")) {
    const text = script.textContent;
    if (!text?.startsWith(targetScriptBeginning)) continue;
    const startIdx = targetScriptBeginning.length;
    const endIdx = text.indexOf("};") + 1 || undefined;
    const obj = JSON.parse(text.slice(startIdx, endIdx));
    return obj.captions.playerCaptionsTracklistRenderer.captionTracks;
  }
  return [];
}
