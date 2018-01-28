// TODO: refactor?

'use strict';

function Shape(color, x, y, w) {
	this.color = color;
	this.x = x;
	this.y = y;
	this.w = w;
}

Shape.prototype.draw = function (context) {
	throw new Error("Function draw must be overriden in subclass!!!");
}

function Circle(color, x, y, w) {
	Shape.apply(this, arguments);
}

Circle.prototype = new Shape();
Circle.prototype.draw = function (context) {
	context.fillStyle = this.color;
	context.beginPath();
	context.arc(this.x, this.y, this.w, 0, degreesToRadians(360), true);
	context.fill();
}

function Square(color, x, y, w) {
	Shape.apply(this, arguments);
}

Square.prototype = new Shape();
Square.prototype.draw = function (context) {
	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.w, this.w);
}

function TweetShirt(text, textSize, textColor, backgroundColor) {
	this.text = text;
	this.textSize = textSize;
	this.textColor = textColor;
	this.backgroundColor = backgroundColor;
	this.shapes = new Array();
}

TweetShirt.prototype.addShape = function (shape) {
	this.shapes.push(shape);
}

function createShape(unknownShape) {
	if (unknownShape.type == "c") {
		return new Circle(unknownShape.color, unknownShape.x, unknownShape.y, unknownShape.w);
	}
	else if (unknownShape.type == "s") {
		return new Square(unknownShape.color, unknownShape.x, unknownShape.y, unknownShape.w);
	}
	else {
		throw new Error("unknown shape");
	}
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
	var tmpTweetShirt = localStorage.getItem("tweetShirt");
	if (tmpTweetShirt != null) {
		tmpTweetShirt = JSON.parse(tmpTweetShirt);
		// tmpTweetShirt heeft geen fies (want ctor is niet expliciet opgeroepen)
		// daarom:
		tweetShirt = new TweetShirt(tmpTweetShirt.text, tmpTweetShirt.textSize, tmpTweetShirt.textColor, tmpTweetShirt.backgroundColor)
		for (var i = 0; i < tmpTweetShirt.shapes.length; i++) {
			var shape = createShape(tmpTweetShirt.shapes[i]);
			tweetShirt.addShape(shape);
		}
		drawShirt();
		settingsShirtToScreen();
	}
}

function setOption(selectElement, value) {
	/*
	return [...selectElement.options].some((option, index) => {
		if (option.value == value) {
			selectElement.selectedIndex = index;
			return true;
		}
	});
	*/
	for(var i=0; i<selectElement.options.length; i++){
		if(selectElement[i].value == value){
			selectElement.selectedIndex = i;
			return;
		}
	}
}

function settingsShirtToScreen() {
	var bgColor = document.getElementById("backgroundColor");
	var figuresColor = document.getElementById("shapesColor");
	var shapeSelect = document.getElementById("shape");
	var fgColor = document.getElementById("foregroundColor");
	var textSize = document.getElementById("textSize");
	var textSelect = document.getElementById("tweets");
	var options;

	bgColor.value = tweetShirt.backgroundColor;

	if (tweetShirt.shapes.length == 0) {
		shapeSelect.selectedIndex = 0;
	}
	else {
		figuresColor.value = tweetShirt.shapes[0].color;
		if (tweetShirt.shapes[0] instanceof Circle) {
			//shapeSelect.selectedIndex = 1;
			setOption(shapeSelect, "circles");
		}
		else if (tweetShirt.shapes[0] instanceof Square) {
			//shapeSelect.selectedIndex = 2;
			setOption(shapeSelect, "squares");
		}
	}
	shapecolorDisplayHandler();
	textSize.value = tweetShirt.textSize;
	fgColor.value = tweetShirt.textColor;
	options = Array.apply(null, textSelect.options);
	textSelect.selectedIndex = options.indexOf(options.find(function (option) { return option.value == tweetShirt.text; }));
}

function saveShirt() {
	localStorage.setItem("tweetShirt", JSON.stringify(tweetShirt));
}

function drawShirt() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = tweetShirt.backgroundColor;
	context.fillRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < tweetShirt.shapes.length; i++) {
		tweetShirt.shapes[i].draw(context);
	}
	context.fillStyle = tweetShirt.textColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);
	context.font = "italic " + tweetShirt.textSize + "em serif";
	context.textAlign = "center";
	context.fillText(tweetShirt.text, canvas.width / 2, 100);
	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!",
		canvas.width - 20, canvas.height - 40);

	drawBird(canvas, context);
}

function shapecolorDisplayHandler() {
	var shapeSelect = document.getElementById("shape");
	var shapeColor = document.getElementById("shapesColor");
	if (shapeSelect.value == "none") {
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

	tweetShirt.shapes = new Array();

	fillBackgroundColor(canvas, context);
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
}

function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var bgColor = selectObj.value;
	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

	tweetShirt.backgroundColor = bgColor;
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

function drawSquare(context, x, y, w) {
	context.fillRect(x, y, w, w);

	var shape = new Square(context.fillStyle, x, y, w);
	shape.type = "s";  // nodig om later json object terug juiste soort shapes te kunnen geven
	tweetShirt.addShape(shape);
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

function drawCircle(context, x, y, w) {
	context.beginPath();
	context.arc(x, y, w, 0, degreesToRadians(360), true);
	context.fill();

	var shape = new Circle(context.fillStyle, x, y, w);
	shape.type = "c";  // nodig om later json object terug juiste soort shapes te kunnen geven
	tweetShirt.addShape(shape);
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

