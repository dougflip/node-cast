function callNodeRemote(){
  var req = new XMLHttpRequest();
  chrome.storage.sync.get({ serverUrl: '' }, function(items) {
    if(!items.serverUrl){
      return alert('You must configure a server URL!\n\nGo to chrome://extensions and click the options button next to Node Cast.')
    }

    req.open("POST", items.serverUrl + '/browser/launch', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    chrome.tabs.query({ active: true }, function(tabs){
      req.send('url=' + tabs[0].url);
    });
  });
}

chrome.browserAction.onClicked.addListener(callNodeRemote);
