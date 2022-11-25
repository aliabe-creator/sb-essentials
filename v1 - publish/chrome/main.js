//All logs here go to page log

document.body.style.border = "2px solid green";

//Simple timer function in ms
const timer = ms => new Promise(res => setTimeout(res, ms))

var x;
var y;

console.log('main content script loaded')
	
// inject code into "the other side" to talk back to this side;
var scr = document.createElement('script');
scr.textContent = `setInterval(function () { 
	var x = parseInt(module.exports.settings.I1l0l.IIO1O.O1lII.status.x);
	var y = parseInt(module.exports.settings.I1l0l.IIO1O.O1lII.status.y);
	console.log(x.toString() + ", " + y.toString()); 
	var event = new CustomEvent("coordevent", {detail: [x, y]});
	document.dispatchEvent(event);}, 3000)`; //3500 must be greater than total delay in event listener

//cram inject in
(document.head || document.documentElement).appendChild(scr);
//and then hide the evidence as much as possible.
scr.parentNode.removeChild(scr);

//now listen for the message
document.addEventListener("coordevent", function (e) {
	x = e.detail[0];
	y = e.detail[1];
	
	let short_x = "[" + (Math.round(x / 10)).toString();
	let short_y = (Math.round(y / 10)).toString() + "]";
	
	async function load () { //needs async for timer
		chrome.runtime.sendMessage({coord: short_x}); //show x coord
		await timer(1000); //wait 1 second before showing y coord
		chrome.runtime.sendMessage({coord: short_y}); //show y coord
	};
	
	load(); //needs call
});

