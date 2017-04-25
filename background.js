chrome.webNavigation.onCompleted.addListener(function(details) {
  chrome.tabs.executeScript({
    file: "insert.js"
  });
});