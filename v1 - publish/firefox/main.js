//All logs here go to page log

document.body.style.border = "2px solid green";

//Simple timer function in ms
const timer = ms => new Promise(res => setTimeout(res, ms))

//main function, async is needed to use timer function
async function load () {
	console.log('main content script loaded')
	
	while(1) { //runs as long as starblast.io open
		//wrappedJSObject needed to access page vars
		let x = parseInt(wrappedJSObject.module.exports.settings.lOIOl.IIl0O.l0l00.status.x); 
		let y = parseInt(wrappedJSObject.module.exports.settings.lOIOl.IIl0O.l0l00.status.y);
		
		let short_x = "[" + (Math.round(x / 10)).toString();
		let short_y = (Math.round(y / 10)).toString() + "]";
		
		browser.runtime.sendMessage(short_x); //show x coord
		await timer(1000); //wait 1 second before showing y coord
		browser.runtime.sendMessage(short_y); //show y coord
		await timer(2000); //wait 2 sec before fetching new coords
	}
}

console.log('here');

load();

