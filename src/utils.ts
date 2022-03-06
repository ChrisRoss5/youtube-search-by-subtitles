const parser = new DOMParser();
const reload = () => location.reload();

function createImgEl(path: string) {
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL("img/" + path);
  return img;
}

async function fetchDoc(url: string) {
  return parser.parseFromString(await (await fetch(url)).text(), "text/html");
}

async function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

async function waitForEl(parent: HTMLElement, childSelector: string) {
  while (true) {
    const el = parent.querySelector(childSelector);
    if (el) return el;
    await sleep(100);
  }
}