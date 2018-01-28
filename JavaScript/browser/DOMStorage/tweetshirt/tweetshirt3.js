'use strict';

function TweetShirt(text, textSize, textColor, backgroundColor, shapes, image) {
	this.text = text;
	this.textSize = textSize;
	this.textColor = textColor;
	this.backgroundColor = backgroundColor;
	this.shapes = shapes;
	this.image = image;
}

var tweetShirt = new TweetShirt();

window.onload = function () {
	var saveButton = document.getElementById("saveButton");
	saveButton.onclick = saveShirt;
	var reloadButton = document.getElementById("reloadButton");
	reloadButton.onclick = reloadShirt;

	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;

	var shapeSelect = document.getElementById("shape");
	shapeSelect.onchange = shapecolorDisplayHandler;
	shapecolorDisplayHandler();

	// Easter Egg ;-)
	makeImage();
}

function reloadShirt() {
	var tmptweetShirt = JSON.parse(localStorage.getItem("tweetShirt"));
	if (tmptweetShirt != null) {
		tweetShirt = tmptweetShirt;
		var canvas = document.getElementById("tshirtCanvas");
		var context = canvas.getContext("2d");
		settingsShirtToScreen(context);
		drawBird(canvas, context);
	}
}

function setOption(selectElement, value) {
	// for (var i = 0; i < selectElement.options.length; i++) {
	// 	if (selectElement[i].value == value) {
	// 		selectElement.selectedIndex = i;
	// 		return;
	// 	}
	// }

	// of:
	var options = selectElement.options;
	selectElement.selectedIndex = options.indexOf(
		options.find(function (option) {
			return option.value == value;
		}));
}

function settingsShirtToScreen(context) {
	var bgColor = document.getElementById("backgroundColor");
	var figuresColor = document.getElementById("shapesColor");
	var shapeSelect = document.getElementById("shape");
	var fgColor = document.getElementById("foregroundColor");
	var textSize = document.getElementById("textSize");
	var textSelect = document.getElementById("tweets");

	bgColor.value = tweetShirt.backgroundColor;
	shapecolorDisplayHandler();
	textSize.value = tweetShirt.textSize;
	fgColor.value = tweetShirt.textColor;
	setOption(textSelect, tweetShirt.text);
	setOption(shapeSelect, tweetShirt.shapes);

	var image = new Image();
	image.src = tweetShirt.image;
	image.onload = function () {
		context.drawImage(image, 0, 0);
	}
}

function saveShirt() {
	localStorage.setItem("tweetShirt", JSON.stringify(tweetShirt));
}

function shapecolorDisplayHandler() {
	var shapeSelect = document.getElementById("shape");
	var shapeColor = document.getElementById("shapesColor");
	if (shapeSelect.value == "none") {
		// shapeColor.style.display = "none";
		// of
		shapeColor.hidden = true;
	}
	else {
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
	tweetShirt.shapes = shape;
	if (shape == "squares") {
		drawFion = drawSquare;
	}
	else if (shape == "circles") {
		drawFion = drawCircle;
	}
	if (drawFion != null) {
		for (var i = 0; i < 20; i++) {
			drawShape(canvas, context, drawFion);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
	tweetShirt.image = canvas.toDataURL();
}

function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var bgColor = selectObj.value;
	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

	tweetShirt.backgroundColor = bgColor;
}

function drawSquare(context, x, y, w) {
	context.fillRect(x, y, w, w);
}

function drawCircle(context, x, y, w) {
	context.beginPath();
	context.arc(x, y, w, 0, degreesToRadians(360), true);
	context.fill();
}

function drawShape(canvas, context, drawHandler) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	var figuresColor = document.getElementById("shapesColor");
	context.fillStyle = figuresColor.value;
	drawHandler(context, x, y, radius);
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
	context.fillText(tweet, canvas.width / 2, 100);

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
		canvas.width - 20, canvas.height - 40);

	tweetShirt.text = tweet;
	tweetShirt.textColor = fgColor;
	tweetShirt.textSize = textSize;
}

function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "images/twitterBird.png";
	twitterBird.onload = function () {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
	return (degrees * Math.PI) / 180;
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
	strs[1] = str.substring(space + 1);
	if (strs[1].length > 60) {
		space = strs[1].indexOf(' ', 60);
		strs[1] = strs[1].substring(space + 1);
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

