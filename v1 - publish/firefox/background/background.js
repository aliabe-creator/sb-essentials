//Triggers when extension installed
browser.runtime.onInstalled.addListener(() => {
  console.log("extension installed");
});

//Triggers when message received (for now just coordinates)
browser.runtime.onMessage.addListener((request, sender, callback) => {
  // `request` in this example would be your hidden input value
  browser.browserAction.setBadgeText({text: request.toString(), tabId: sender.tab.id});
  browser.browserAction.setBadgeBackgroundColor({"color": "blue"})
  // you would probably update this to call `updateCount`
});