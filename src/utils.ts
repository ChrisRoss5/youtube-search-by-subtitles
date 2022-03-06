const parser = new DOMParser();

const fetchDoc = async (url: string) =>
  parser.parseFromString(await (await fetch(url)).text(), "text/html");

const createImgEl = (path: string) => {
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL("img/" + path);
  return img;
};

const reload = () => location.reload();