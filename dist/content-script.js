"use strict";
const translationLanguages = [
    { languageCode: "af", languageName: { simpleText: "Afrikaans" } },
    { languageCode: "sq", languageName: { simpleText: "Albanian" } },
    { languageCode: "am", languageName: { simpleText: "Amharic" } },
    { languageCode: "ar", languageName: { simpleText: "Arabic" } },
    { languageCode: "hy", languageName: { simpleText: "Armenian" } },
    { languageCode: "az", languageName: { simpleText: "Azerbaijani" } },
    { languageCode: "bn", languageName: { simpleText: "Bangla" } },
    { languageCode: "eu", languageName: { simpleText: "Basque" } },
    { languageCode: "be", languageName: { simpleText: "Belarusian" } },
    { languageCode: "bs", languageName: { simpleText: "Bosnian" } },
    { languageCode: "bg", languageName: { simpleText: "Bulgarian" } },
    { languageCode: "my", languageName: { simpleText: "Burmese" } },
    { languageCode: "ca", languageName: { simpleText: "Catalan" } },
    { languageCode: "ceb", languageName: { simpleText: "Cebuano" } },
    {
        languageCode: "zh-Hans",
        languageName: { simpleText: "Chinese (Simplified)" },
    },
    {
        languageCode: "zh-Hant",
        languageName: { simpleText: "Chinese (Traditional)" },
    },
    { languageCode: "co", languageName: { simpleText: "Corsican" } },
    { languageCode: "hr", languageName: { simpleText: "Croatian" } },
    { languageCode: "cs", languageName: { simpleText: "Czech" } },
    { languageCode: "da", languageName: { simpleText: "Danish" } },
    { languageCode: "nl", languageName: { simpleText: "Dutch" } },
    { languageCode: "en", languageName: { simpleText: "English" } },
    { languageCode: "eo", languageName: { simpleText: "Esperanto" } },
    { languageCode: "et", languageName: { simpleText: "Estonian" } },
    { languageCode: "fil", languageName: { simpleText: "Filipino" } },
    { languageCode: "fi", languageName: { simpleText: "Finnish" } },
    { languageCode: "fr", languageName: { simpleText: "French" } },
    { languageCode: "gl", languageName: { simpleText: "Galician" } },
    { languageCode: "ka", languageName: { simpleText: "Georgian" } },
    { languageCode: "de", languageName: { simpleText: "German" } },
    { languageCode: "el", languageName: { simpleText: "Greek" } },
    { languageCode: "gu", languageName: { simpleText: "Gujarati" } },
    { languageCode: "ht", languageName: { simpleText: "Haitian Creole" } },
    { languageCode: "ha", languageName: { simpleText: "Hausa" } },
    { languageCode: "haw", languageName: { simpleText: "Hawaiian" } },
    { languageCode: "iw", languageName: { simpleText: "Hebrew" } },
    { languageCode: "hi", languageName: { simpleText: "Hindi" } },
    { languageCode: "hmn", languageName: { simpleText: "Hmong" } },
    { languageCode: "hu", languageName: { simpleText: "Hungarian" } },
    { languageCode: "is", languageName: { simpleText: "Icelandic" } },
    { languageCode: "ig", languageName: { simpleText: "Igbo" } },
    { languageCode: "id", languageName: { simpleText: "Indonesian" } },
    { languageCode: "ga", languageName: { simpleText: "Irish" } },
    { languageCode: "it", languageName: { simpleText: "Italian" } },
    { languageCode: "ja", languageName: { simpleText: "Japanese" } },
    { languageCode: "jv", languageName: { simpleText: "Javanese" } },
    { languageCode: "kn", languageName: { simpleText: "Kannada" } },
    { languageCode: "kk", languageName: { simpleText: "Kazakh" } },
    { languageCode: "km", languageName: { simpleText: "Khmer" } },
    { languageCode: "rw", languageName: { simpleText: "Kinyarwanda" } },
    { languageCode: "ko", languageName: { simpleText: "Korean" } },
    { languageCode: "ku", languageName: { simpleText: "Kurdish" } },
    { languageCode: "ky", languageName: { simpleText: "Kyrgyz" } },
    { languageCode: "lo", languageName: { simpleText: "Lao" } },
    { languageCode: "la", languageName: { simpleText: "Latin" } },
    { languageCode: "lv", languageName: { simpleText: "Latvian" } },
    { languageCode: "lt", languageName: { simpleText: "Lithuanian" } },
    { languageCode: "lb", languageName: { simpleText: "Luxembourgish" } },
    { languageCode: "mk", languageName: { simpleText: "Macedonian" } },
    { languageCode: "mg", languageName: { simpleText: "Malagasy" } },
    { languageCode: "ms", languageName: { simpleText: "Malay" } },
    { languageCode: "ml", languageName: { simpleText: "Malayalam" } },
    { languageCode: "mt", languageName: { simpleText: "Maltese" } },
    { languageCode: "mi", languageName: { simpleText: "Māori" } },
    { languageCode: "mr", languageName: { simpleText: "Marathi" } },
    { languageCode: "mn", languageName: { simpleText: "Mongolian" } },
    { languageCode: "ne", languageName: { simpleText: "Nepali" } },
    { languageCode: "no", languageName: { simpleText: "Norwegian" } },
    { languageCode: "ny", languageName: { simpleText: "Nyanja" } },
    { languageCode: "or", languageName: { simpleText: "Odia" } },
    { languageCode: "ps", languageName: { simpleText: "Pashto" } },
    { languageCode: "fa", languageName: { simpleText: "Persian" } },
    { languageCode: "pl", languageName: { simpleText: "Polish" } },
    { languageCode: "pt", languageName: { simpleText: "Portuguese" } },
    { languageCode: "pa", languageName: { simpleText: "Punjabi" } },
    { languageCode: "ro", languageName: { simpleText: "Romanian" } },
    { languageCode: "ru", languageName: { simpleText: "Russian" } },
    { languageCode: "sm", languageName: { simpleText: "Samoan" } },
    { languageCode: "gd", languageName: { simpleText: "Scottish Gaelic" } },
    { languageCode: "sr", languageName: { simpleText: "Serbian" } },
    { languageCode: "sn", languageName: { simpleText: "Shona" } },
    { languageCode: "sd", languageName: { simpleText: "Sindhi" } },
    { languageCode: "si", languageName: { simpleText: "Sinhala" } },
    { languageCode: "sk", languageName: { simpleText: "Slovak" } },
    { languageCode: "sl", languageName: { simpleText: "Slovenian" } },
    { languageCode: "so", languageName: { simpleText: "Somali" } },
    { languageCode: "st", languageName: { simpleText: "Southern Sotho" } },
    { languageCode: "es", languageName: { simpleText: "Spanish" } },
    { languageCode: "su", languageName: { simpleText: "Sundanese" } },
    { languageCode: "sw", languageName: { simpleText: "Swahili" } },
    { languageCode: "sv", languageName: { simpleText: "Swedish" } },
    { languageCode: "tg", languageName: { simpleText: "Tajik" } },
    { languageCode: "ta", languageName: { simpleText: "Tamil" } },
    { languageCode: "tt", languageName: { simpleText: "Tatar" } },
    { languageCode: "te", languageName: { simpleText: "Telugu" } },
    { languageCode: "th", languageName: { simpleText: "Thai" } },
    { languageCode: "tr", languageName: { simpleText: "Turkish" } },
    { languageCode: "tk", languageName: { simpleText: "Turkmen" } },
    { languageCode: "uk", languageName: { simpleText: "Ukrainian" } },
    { languageCode: "ur", languageName: { simpleText: "Urdu" } },
    { languageCode: "ug", languageName: { simpleText: "Uyghur" } },
    { languageCode: "uz", languageName: { simpleText: "Uzbek" } },
    { languageCode: "vi", languageName: { simpleText: "Vietnamese" } },
    { languageCode: "cy", languageName: { simpleText: "Welsh" } },
    { languageCode: "fy", languageName: { simpleText: "Western Frisian" } },
    { languageCode: "xh", languageName: { simpleText: "Xhosa" } },
    { languageCode: "yi", languageName: { simpleText: "Yiddish" } },
    { languageCode: "yo", languageName: { simpleText: "Yoruba" } },
    { languageCode: "zu", languageName: { simpleText: "Zulu" } },
];
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const parser = new DOMParser();
const fetchDoc = (url) => __awaiter(void 0, void 0, void 0, function* () { return parser.parseFromString(yield (yield fetch(url)).text(), "text/html"); });
const createImgEl = (path) => {
    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("img/" + path);
    return img;
};
const reload = () => location.reload();
/* https://developers.google.com/youtube/v3/docs/captions/list */
/// <reference path="./translation-languages.ts" />
/// <reference path="./utils.ts" />
const targetScriptBeginning = "var ytInitialPlayerResponse = ";
let wantedlanguageCode;
let isFiltering;
let filterBtn;
chrome.storage.sync.get(null, (storage) => {
    ({ wantedlanguageCode } = storage);
    // Triggering the observer
    if (/complete|interactive|loaded/.test(document.readyState))
        startObserving();
    else
        document.addEventListener("DOMContentLoaded", startObserving, false);
});
function startObserving() {
    new MutationObserver((mutationsList) => {
        var _a;
        if (filterBtn) {
            console.log(123);
            isFiltering = !!wantedlanguageCode && location.hash == "#filtering";
            filterBtn.childNodes[1].nodeValue =
                (isFiltering ? "Stop" : "Start") + " Filtering";
            if (!isFiltering)
                clearUIBadges();
        }
        for (const mutation of mutationsList)
            for (const el of mutation.addedNodes)
                if (((_a = el.ariaLabel) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == "closed captions")
                    addUIBadge(el);
                else if (el.id == "filter-menu")
                    addUIFilter(el);
    }).observe(document.body, {
        childList: true,
        subtree: true,
    });
}
function addUIFilter(filterMenu) {
    // Wanted language choice
    let subtitlesBtn = filterMenu.querySelector("ytd-toggle-button-renderer");
    subtitlesBtn = subtitlesBtn.parentElement.appendChild(subtitlesBtn.cloneNode());
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
        rowEl.onclick = () => chrome.storage.sync.set({ wantedlanguageCode: languageCode }, reload);
    }
    subtitlesBtn.appendChild(listEl).className = "captions-list";
    // Clear language
    if (!wantedlanguageCode)
        return;
    subtitlesBtn.childNodes[1].nodeValue += ": " + wantedlanguageCode;
    const clearEl = document.createElement("span");
    subtitlesBtn.parentElement.appendChild(clearEl).innerHTML = "&nbsp;❌";
    clearEl.style.cursor = "pointer";
    clearEl.onclick = () => chrome.storage.sync.clear(reload);
    // Enable/Disable filtering
    filterBtn = subtitlesBtn.parentElement.appendChild(subtitlesBtn.cloneNode());
    filterBtn.append(createImgEl("filter.svg"), document.createTextNode(""));
    filterBtn.style.cursor = "pointer";
    filterBtn.onclick = () => {
        let newLocation = location.href.replace(/&.*/, "");
        if (!isFiltering)
            newLocation += "&sp=EgIoAQ%253D%253D#filtering";
        location.href = newLocation;
    };
}
function addUIBadge(badge) {
    return __awaiter(this, void 0, void 0, function* () {
        let video = badge.closest("ytd-video-renderer");
        const isYoutubeSearch = !!video;
        if (!isYoutubeSearch)
            video = badge.closest("#dismissible");
        const thumbnail = video.querySelector("#thumbnail");
        const url = thumbnail.href;
        if (!url)
            return;
        // Listing CC languages
        const listEl = document.createElement("div");
        const captionTracks = yield getCaptionTracks(url);
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
            if (isFiltering && isYoutubeSearch)
                video.remove();
            return;
        }
        const newBadge = badge.cloneNode();
        badge.parentElement.appendChild(newBadge).textContent = wantedlanguageCode;
        newBadge.classList.add("custom-badge");
        newBadge.ariaLabel = "";
        thumbnail.classList.add("custom-thumbnail");
    });
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
function getCaptionTracks(url) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const script of (yield fetchDoc(url)).querySelectorAll("script")) {
            const text = script.textContent;
            if (!(text === null || text === void 0 ? void 0 : text.startsWith(targetScriptBeginning)))
                continue;
            const startIdx = targetScriptBeginning.length;
            const endIdx = text.indexOf("};") + 1 || undefined;
            const obj = JSON.parse(text.slice(startIdx, endIdx));
            return obj.captions.playerCaptionsTracklistRenderer.captionTracks;
        }
        return [];
    });
}
