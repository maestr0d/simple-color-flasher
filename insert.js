function rgbrand() {
	var r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	var g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	var b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	return "rgb(" + r + "," + g + "," + b + ")";
}
var all = document.getElementsByTagName("*");
var refreshIntervalId = setInterval(function(){
for (var i=0, max=all.length; i < max; i++) {
	//document.body.style.backgroundColor = rgbrand();
	all[i].style.borderColor = rgbrand();
	all[i].style.color = rgbrand();
	all[i].style.backgroundColor = rgbrand();
}
}, 100);