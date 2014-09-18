chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if(message.functiontoInvoke == "lock"){
	 	window.onbeforeunload = confirmExit;
		function confirmExit() {
		    return "You have attempted to leave or reload this page. Are you sure?";
		}   	
    }
});