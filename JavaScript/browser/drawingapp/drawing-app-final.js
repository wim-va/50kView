// TODO - mogelijke verbeteringen en uitbreidingen
// - aankruisvak toevoegen om prentje van eend (outLineImage) al dan niet te tonen
// - bij elk punt bijhouden of het met een marker of een crayon getekend moet worden 
//   (ipv alle munten met marker of crayon te tekenen)
// - canvas niet altijd helemaal hertekenen

// Copyright 2010 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

/**
 * Creates a point.
 * 
 * @param x
 * @param y
 * @param color
 * @param tool
 * @param size
 * @param dragging
 */
function Point(x, y, color, tool, size, dragging) {
	this.x = x;
	this.y = y;
	this.color = color;
	this.tool = tool;
	this.size = size;
	this.dragging = dragging;
}

var canvas;
var context;
var canvasWidth = 490;
var canvasHeight = 220;
var padding = 25;
var lineWidth = 8;
var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorBrown = "#986928";
var outlineImage = new Image();
var crayonImage = new Image();
var markerImage = new Image();
var eraserImage = new Image();
var crayonBackgroundImage = new Image();
var markerBackgroundImage = new Image();
var eraserBackgroundImage = new Image();
var crayonTextureImage = new Image();
var clicks = new Array();
var paint = false;
var curColor = colorPurple;
var curTool = "crayon";
var curSize = "normal";
var mediumStartX = 18;
var mediumStartY = 19;
var mediumImageWidth = 93;
var mediumImageHeight = 46;
var drawingAreaX = 111;
var drawingAreaY = 11;
var drawingAreaWidth = 267;
var drawingAreaHeight = 200;
var toolHotspotStartY = 23;
var toolHotspotHeight = 38;
var sizeHotspotStartY = 157;
var sizeHotspotHeight = 36;
var sizeHotspotWidthObject = {
	huge : 39,
	large : 25,
	normal : 18,
	small : 16
}
var totalLoadResources = 8;
var curLoadResNum = 0;

$(document).ready(function() {
	 prepareCanvas();
});

/**
 * Calls the redraw function after all neccessary resources are loaded.
 */
function resourceLoaded() {
	if (++curLoadResNum >= totalLoadResources) {
		redraw();
	}
}

/**
 * Creates a canvas element, loads images, adds events, and draws the canvas for
 * the first time.
 */
function prepareCanvas() {
	canvas = document.getElementById('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	context = canvas.getContext("2d");

	loadImages();
	addMouseEvents();
}

/**
 * Add handlers to mouse events.
 */
function addMouseEvents() {
	$('#canvas').mousedown(
			function(e) {
				// Mouse down location
				var mouseX = e.pageX - this.offsetLeft;
				var mouseY = e.pageY - this.offsetTop;

				if (mouseX < drawingAreaX) // Left of the drawing area
				{
					setCurColor(mouseX, mouseY);
				} else if (mouseX > drawingAreaX + drawingAreaWidth) // Right
				// of
				// the
				// drawing
				// area
				{
					if (mouseY > toolHotspotStartY) {
						if (mouseY > sizeHotspotStartY) {
							setCurSize(mouseX, mouseY);
						} else {
							setCurTool(mouseX, mouseY);
						}
					}
				} else if (mouseY > drawingAreaY
						&& mouseY < drawingAreaY + drawingAreaHeight) {
					// Mouse click location on drawing area
				}
				paint = true;
				addClick(mouseX, mouseY, false);
				redraw();
			});

	$('#canvas').mousemove(
			function(e) {
				if (paint == true) {
					addClick(e.pageX - this.offsetLeft, e.pageY
							- this.offsetTop, true);
					redraw();
				}
			});

	$('#canvas').mouseup(function(e) {
		paint = false;
		redraw();
	});

	$('#canvas').mouseleave(function(e) {
		paint = false;
	});
}

/**
 * Sets value of curTool depending on mouse position
 * 
 * @param mouseX
 * @param mouseY
 */
function setCurTool(mouseX, mouseY) {
	if (mouseY < toolHotspotStartY + toolHotspotHeight) {
		curTool = "crayon";
	} else if (mouseY < toolHotspotStartY + toolHotspotHeight * 2) {
		curTool = "marker";
	} else if (mouseY < toolHotspotStartY + toolHotspotHeight * 3) {
		curTool = "eraser";
	}
}

/**
 * Sets the value of curSize depending on mouse position
 * 
 * @param mouseX
 * @param mouseY
 */
function setCurSize(mouseX, mouseY) {
	var sizeHotspotStartX = drawingAreaX + drawingAreaWidth;
	if (mouseY < sizeHotspotStartY + sizeHotspotHeight
			&& mouseX > sizeHotspotStartX) {
		if (mouseX < sizeHotspotStartX + sizeHotspotWidthObject.huge) {
			curSize = "huge";
		} else if (mouseX < sizeHotspotStartX + sizeHotspotWidthObject.large
				+ sizeHotspotWidthObject.huge) {
			curSize = "large";
		} else if (mouseX < sizeHotspotStartX + sizeHotspotWidthObject.normal
				+ sizeHotspotWidthObject.large + sizeHotspotWidthObject.huge) {
			curSize = "normal";
		} else if (mouseX < sizeHotspotStartX + sizeHotspotWidthObject.small
				+ sizeHotspotWidthObject.normal + sizeHotspotWidthObject.large
				+ sizeHotspotWidthObject.huge) {
			curSize = "small";
		}
	}
}
/**
 * Set value of curColor depending on mouse position
 * 
 * @param mouseX
 * @param mouseY
 */
function setCurColor(mouseX, mouseY) {
	if (mouseX > mediumStartX) {
		if (mouseY > mediumStartY && mouseY < mediumStartY + mediumImageHeight) {
			curColor = colorPurple;
		} else if (mouseY > mediumStartY + mediumImageHeight
				&& mouseY < mediumStartY + mediumImageHeight * 2) {
			curColor = colorGreen;
		} else if (mouseY > mediumStartY + mediumImageHeight * 2
				&& mouseY < mediumStartY + mediumImageHeight * 3) {
			curColor = colorYellow;
		} else if (mouseY > mediumStartY + mediumImageHeight * 3
				&& mouseY < mediumStartY + mediumImageHeight * 4) {
			curColor = colorBrown;
		}
	}
}

/**
 * Load images.
 */
function loadImages() {
	for ( var sth in window) {
		if (window[sth] instanceof Image) {
			window[sth].onload = function() {
				resourceLoaded();
			};
		}
	}

	crayonImage.src = "images/crayon-outline.png";
	markerImage.src = "images/marker-outline.png";
	eraserImage.src = "images/eraser-outline.png";
	crayonBackgroundImage.src = "images/crayon-background.png";
	markerBackgroundImage.src = "images/marker-background.png";
	eraserBackgroundImage.src = "images/eraser-background.png";
	crayonTextureImage.src = "images/crayon-texture.png";
	outlineImage.src = "images/watermelon-duck-outline.png";

	// imgs zijn pixels op canvas en zijn dus geen img-elementen in DOM-tree
	// => imgs worden niet gevonden op onderstaande manier
	// $("img").load(function() {
	// resourceLoaded();
	// });
}

/**
 * Adds a point to the drawing array.
 * 
 * @param x
 * @param y
 * @param dragging
 */
function addClick(x, y, dragging) {
	clicks.push(new Point(x, y, curColor, curTool, curSize, dragging));
}

/**
 * Clears the canvas.
 */
function clearCanvas() {
	context.clearRect(0, 0, canvasWidth, canvasHeight);
}

/**
 * Redraws the canvas.
 */
function redraw() {
	// Make sure required resources are loaded before redrawing
	if (curLoadResNum < totalLoadResources) {
		return;
	}

	clearCanvas();
	drawTools();
	drawPoints();
	
	context.restore();
	// Overlay a crayon texture (if the current tool is crayon)
	if (curTool == "crayon") {
		context.globalAlpha = 0.4;
		context.drawImage(crayonTextureImage, 0, 0, canvasWidth, canvasHeight);
	}
	context.globalAlpha = 1;

	// Draw the outline image
	context.drawImage(outlineImage, drawingAreaX, drawingAreaY,
			drawingAreaWidth, drawingAreaHeight);
}

/**
 * Draws all points user has drawn
 */
function drawPoints() {
	var radius;
	var i = 0;
	for (; i < clicks.length; i++) {
		radius = getRadius(i);
		drawLine(i);
		setStrokeStyle(i);
		context.lineJoin = "round";
		context.lineWidth = radius;
		context.stroke();
	}
}

/**
 * Sets strokestyle from the i-th point 
 * 
 * @param i
 */
function setStrokeStyle(i) {
	if (clicks[i].tool == "eraser") {
		// context.globalCompositeOperation = "destination-out"; // To erase
		// instead of draw over with white
		context.strokeStyle = 'white';
	} else {
		// context.globalCompositeOperation = "source-over"; // To erase
		// instead of draw over with white
		context.strokeStyle = clicks[i].color;
	}
}

/**
 * Draws a line from the i-th point
 * 
 * @param i
 */
function drawLine(i) {
	context.beginPath();
	if (clicks[i].dragging && i) {
		context.moveTo(clicks[i - 1].x, clicks[i - 1].y);
	} else {
		context.moveTo(clicks[i].x, clicks[i].y);
	}
	context.lineTo(clicks[i].x, clicks[i].y);
	context.closePath();
}

/**
 * Gets the radius from the i-th point 
 * 
 * @param i
 * @returns {Number}
 */
function getRadius(i) {
	var radius;
	if (clicks[i].size == "small") {
		radius = 2;
	} else if (clicks[i].size == "normal") {
		radius = 5;
	} else if (clicks[i].size == "large") {
		radius = 10;
	} else if (clicks[i].size == "huge") {
		radius = 20;
	} else {
		alert("Error: Radius is zero for click " + i);
		radius = 0;
	}
	return radius;
}

/**
 * Draws the toolbar.
 */
function drawTools() {
	if (curTool == "crayon") {
		drawCrayons();
	} else if (curTool == "marker") {
		drawMarkers();
	} else if (curTool == "eraser") {
		drawEraser();
	} else {
		alert("Error: Current Tool is undefined");
	}
	drawMarkerInRuler();
	clipDrawing();
}

/**
 * Draws the markers.
 */
function drawMarkers() {
	var locY;
	// Draw the marker tool background
	context.drawImage(markerBackgroundImage, 0, 0, canvasWidth, canvasHeight);
	locY = 19;
	drawMarker(colorPurple, locY);
	locY += 46;
	drawMarker(colorGreen, locY);
	locY += 46;
	drawMarker(colorYellow, locY);
	locY += 46;
	drawMarker(colorBrown, locY);
}

/**
 * Draws the crayons.
 */
function drawCrayons() {
	var locY;// Draw the crayon tool background
	context.drawImage(crayonBackgroundImage, 0, 0, canvasWidth, canvasHeight);
	locY = 19;
	drawCrayon(colorPurple, locY);
	locY += 46;
	drawCrayon(colorGreen, locY);
	locY += 46;
	drawCrayon(colorYellow, locY);
	locY += 46;
	drawCrayon(colorBrown, locY);
}

/**
 * Keeps the drawing in the drawing area.
 */
function clipDrawing() {
	context.save();
	context.beginPath();
	context.rect(drawingAreaX, drawingAreaY, drawingAreaWidth,
			drawingAreaHeight);
	context.clip();
}

/**
 * Draws marker in ruler to indicate size of tool. (small/normal/large/huge)
 */
function drawMarkerInRuler() {
	var locX, locY;
	if (curSize == "small") {
		locX = 467;
	} else if (curSize == "normal") {
		locX = 450;
	} else if (curSize == "large") {
		locX = 428;
	} else if (curSize == "huge") {
		locX = 399;
	}
	locY = 189;
	context.beginPath();
	context.rect(locX, locY, 2, 12);
	context.closePath();
	context.fillStyle = '#333333';
	context.fill();
}

/**
 * Draws the eraser.
 */
function drawEraser() {
	context.drawImage(eraserBackgroundImage, 0, 0, canvasWidth, canvasHeight);
	context.drawImage(eraserImage, 18, 19, mediumImageWidth, mediumImageHeight);
}

/**
 * Draws a marker.
 * 
 * @param color
 * @param locY
 */
function drawMarker(color, locY) {
	var locX;
	locX = (curColor == color) ? 18 : 52;
	drawMarkerImage(color, locY, locX);
	if (curColor == color) {
		context.drawImage(markerImage, locX, locY, mediumImageWidth,
				mediumImageHeight);
	} else {
		context.drawImage(markerImage, 0, 0, 59, mediumImageHeight, locX, locY,
				59, mediumImageHeight);
	}
}

/**
 * Fills the point of a marker with the given color.
 * 
 * @param color
 * @param locY
 * @param locX
 */
function drawMarkerImage(color, locY, locX) {
	context.beginPath();
	context.moveTo(locX + 10, locY + 24);
	context.lineTo(locX + 10, locY + 24);
	context.lineTo(locX + 22, locY + 16);
	context.lineTo(locX + 22, locY + 31);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}


/**
 * Draws a crayon.
 * 
 * @param color
 * @param locY
 */
function drawCrayon(color, locY) {
	var locX;
	locX = (curColor == color) ? 18 : 52;
	drawCrayonImage(locX, locY, color);
	if (curColor == color) {
		context.drawImage(crayonImage, locX, locY, mediumImageWidth,
				mediumImageHeight);
	} else {
		context.drawImage(crayonImage, 0, 0, 59, mediumImageHeight, locX, locY,
				59, mediumImageHeight);
	}
}

/**
 * Fills the point of a crayon with the given color
 * 
 * @param locX
 * @param locY
 * @param color
 */
function drawCrayonImage(locX, locY, color) {
	context.beginPath();
	context.moveTo(locX + 41, locY + 11);
	context.lineTo(locX + 41, locY + 35);
	context.lineTo(locX + 29, locY + 35);
	context.lineTo(locX + 29, locY + 33);
	context.lineTo(locX + 11, locY + 27);
	context.lineTo(locX + 11, locY + 19);
	context.lineTo(locX + 29, locY + 13);
	context.lineTo(locX + 29, locY + 11);
	context.lineTo(locX + 41, locY + 11);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}