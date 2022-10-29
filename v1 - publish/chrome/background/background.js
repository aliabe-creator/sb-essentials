//Triggers when extension installed
chrome.runtime.onInstalled.addListener(() => {
  console.log("extension installed");
});

//Triggers when message received (for now just coordinates)
chrome.runtime.onMessage.addListener((request, sender, callback) => {
  // `request` in this example would be your hidden input value
  chrome.browserAction.setBadgeText({text: request.coord.toString(), tabId: sender.tab.id});
  chrome.browserAction.setBadgeBackgroundColor({"color": "blue"})
  // you would probably update this to call `updateCount`
});