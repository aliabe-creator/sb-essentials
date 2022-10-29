//Runs when icon clicked (popup html runs)

function onExecuted(result) {
	console.log(`poggers`);
}

function onError(error) {
	console.log(`Error: ${error}`);
}

const copycoords = 'var status = wrappedJSObject.module.exports.settings.lOIOl.IIl0O.l0l00.status; navigator.clipboard.writeText(status.x + ", " + status.y); XPCNativeWrapper(wrappedJSObject.foo);';

const copying = browser.tabs.executeScript({
	code: copycoords
});
copying.then(onExecuted, onError);




