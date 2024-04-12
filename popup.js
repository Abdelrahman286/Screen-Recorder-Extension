// when the user click on record inject the <content_script>

const initFunc = async () => {
  const tab = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab) return;

  const tabId = tab[0].id;
  console.log("ineject into tab", tabId);
  await chrome.scripting.executeScript({
    files: ["content.js"],
    target: { tabId },
  });
};


initFunc();
