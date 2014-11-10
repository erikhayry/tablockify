function lock(info, tab) {    
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "lock"
        });
    });
}

var context = "all";
var title = "Lock tab";
var id = chrome.contextMenus.create({
    "title": title,
    "contexts": [context],
    "onclick": lock
});