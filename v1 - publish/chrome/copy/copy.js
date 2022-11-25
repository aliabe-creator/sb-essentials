//Runs when icon clicked (popup html runs)

function onExecuted(result) {
	console.log(`poggers`);
}

function onError(error) {
	console.log(`Error: ${error}`);
}

const copycoords = `var scr = document.createElement('script');
					scr.textContent = "(function () { var status = module.exports.settings.I1l0l.IIO1O.O1lII.status; navigator.clipboard.writeText(status.x + ', ' + status.y);})();";
					//cram inject in
					(document.head || document.documentElement).appendChild(scr);
					//and then hide the evidence as much as possible.
					scr.parentNode.removeChild(scr);`; //this is essentially copied over from main.js, but instead of sending data to event it copies to cb
														//setinterval is not required because this is one-time
														//we use a self-invoking function

const copying = chrome.tabs.executeScript({
	code: copycoords
});
copying.then(onExecuted, onError);



