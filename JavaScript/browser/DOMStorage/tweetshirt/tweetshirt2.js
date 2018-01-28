'use strict';

window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
	
	var shapeSelect = document.getElementById("shape");
	shapeSelect.onchange = shapecolorDisplayHandler;
	shapecolorDisplayHandler();
	
	// Easter Egg ;-)
	makeImage();
}

function shapecolorDisplayHandler(){
	var shapeSelect = document.getElementById("shape");
	var shapeColor = document.getElementById("shapesColor");
	if (shapeSelect.value == "none"){
		// shapeColor.style.display = "none";
		// of
		shapeColor.hidden = true;
	}
	else{
		// shapeColor.style.display = "inline";
		// of
		shapeColor.hidden = false;
	}
}

function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	var drawFion = null;

	fillBackgroundColor(canvas, context);
	if (shape == "squares") {
		drawFion = drawSquare; 
	}
	else if (shape == "circles") {
		drawFion = drawCircle;
	}
	if (drawFion != null){
		for (var i = 0; i < 20; i++) {
			drawShape(canvas, context, drawFion);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}

function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var bgColor = selectObj.value;
	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

/*
function drawSquare(canvas, context) {
	var w = Math.floor(Math.random() * 40);    
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	var figuresColor = document.getElementById("shapesColor");
	context.fillStyle = figuresColor.value;
	context.fillRect(x, y, w, w);
}
*/

function drawSquare(context, x, y, w){
	context.fillRect(x, y, w, w);
}

/*
function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	var figuresColor = document.getElementById("shapesColor");

	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);
	context.fillStyle = figuresColor.value;
	context.fill();
}
*/

function drawCircle(context, x, y, w){
	context.beginPath();
	context.arc(x, y, w, 0, degreesToRadians(360), true);
	context.fill();
}

function drawShape(canvas, context, drawHandler){
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	var figuresColor = document.getElementById("shapesColor");
	context.fillStyle = figuresColor.value;
	drawHandler(context,x,y,radius);
}

function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var fgColor = selectObj.value;
	var textSize = document.getElementById("textSize").value;

	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);

	selectObj = document.getElementById("tweets");
	var index = selectObj.selectedIndex;
	var tweet = selectObj[index].value;
	context.font = "italic " + textSize + "em serif";
	context.textAlign = "center";
	context.fillText(tweet, canvas.width/2, 100);

	// If you want to try splitIntoLines to 
	// handle longer tweets, uncomment this code
	// and replace the context.fillText line above
/*
	if (tweet.length > 60) {
		var tweetLines = splitIntoLines(tweet);
		for (var i = 0; i < tweetLines.length; i++) {
			context.fillText(tweetLines[i], 30, 70+(i*25));
		}
	}
	else {
		context.fillText(tweet, 30, 100);
	}
*/

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!", 
		canvas.width-20, canvas.height-40);
}

function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "images/twitterBird.png";
	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}

function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];
		var option = document.createElement("option");
		option.text = tweet.text;
		option.value = tweet.text.replace("\"", "'");
		tweetsSelection.options.add(option);
    }
	tweetsSelection.selectedIndex = 0;
}


// Splits one long string into multiple lines of 
// no more than 60 characters each. Returns an
// array of the lines.
function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 60);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space+1);
	if (strs[1].length > 60) {
		space = strs[1].indexOf(' ', 60);
		strs[1] = strs[1].substring(space+1);
		strs[2] = strs[1].substring(0, space);
	}
	return strs;
}

// Easter Egg
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.open(canvas.toDataURL('image/png'), '_blank');
	};
}

