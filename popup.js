// when the user click on record inject the <content_script>

const blockedwebsites = [
  "chrome://",
  "https://chrome.google.com/webstore/",
  "chrome-extension://",
  "https://chromewebstore.google.com",
];

function checkList(url) {
  let res = false;
  blockedwebsites.forEach((ele) => {
    if (url.startsWith(ele)) {
      res = true;
      return;
    }
  });

  return res;
}
const initFunc = async () => {
  const tab = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab) return;

  if (checkList(tab[0].url)) {
    return;
  } else {
    const tabId = tab[0].id;
    console.log(tab);
    console.log("ineject into tab", tabId);
    try {
      await chrome.scripting.executeScript({
        files: ["content.js"],
        target: { tabId },
      });
    } catch (e) {
      console.log(e);
    }
  }
};

initFunc();
