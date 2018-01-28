'use strict';

const IMAGE_SIZE = 100;
var xPosBoat;

window.onload = function () {
    drawSky();
    drawSea();
    setInterval(drawSea, 1000);
    xPosBoat = document.getElementById("mijnCanvas").width;
    setInterval(moveBoat, 100);
}

function drawSky() {
    var canvas = document.getElementById("mijnCanvas");
    var context = canvas.getContext("2d");
    var posHorizon = Math.floor(canvas.height * 2 / 3);
    context.fillStyle = "#ccffff";
    context.fillRect(0, 0, canvas.width, posHorizon);
    drawSun(canvas, context);
    drawImage(canvas, context, 20, 0, "birds.png", 200);
    drawText(canvas, context);
}

function drawSea() {
    var canvas = document.getElementById("mijnCanvas");
    var context = canvas.getContext("2d");
    var posHorizon = Math.floor(canvas.height * 2 / 3);
    context.fillStyle = "#4b42f4";
    context.fillRect(0, posHorizon, canvas.width, Math.floor(canvas.height / 3));
    drawImage(canvas, context, Math.floor(Math.random() * (canvas.width - IMAGE_SIZE)),
        Math.floor(posHorizon + Math.random() * (canvas.height / 3 - IMAGE_SIZE)), "zeemeermin.png");
    drawBubbles(canvas, context);
}

function drawSun(canvas, context) {
    for (var i = 1; i <= 10; i++) {
        context.globalAlpha = i / 10;
        drawCircle(canvas, context, 540, 60, 50 - (i - 1) * 5, "yellow");
    }
}

function moveBoat() {
    var canvas = document.getElementById("mijnCanvas");
    var context = canvas.getContext("2d");
    var posHorizon = Math.floor(canvas.height * 2 / 3);
    context.clearRect(xPosBoat, posHorizon - 100, 150, 100);
    context.fillStyle = "#ccffff";
    context.fillRect(xPosBoat, posHorizon - 100, 150, 100);
    xPosBoat = xPosBoat == -160 ? canvas.width : xPosBoat - 1;
    drawBoat(canvas, context, xPosBoat, posHorizon - 50, 150, 50);
}

function drawBoat(canvas, context, x, y, width, height, color = "brown") {
    // draw a boat 
    // x and y are the coordinates of te left upper corner of the boat
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + width, y);
    context.lineTo(x + width - 20, y + height);
    context.lineTo(x + 20, y + height);
    context.fill();
    context.closePath();
    context.fillStyle = "black";
    context.fillRect(x + 50, y - 50, 50, 50);
}

function drawCircle(canvas, context, x, y, radius, color = "white") {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.fillStyle = color;
    context.fill();
}

function drawBubbles(canvas, context) {
    var radius, x, y;
    var posHorizon = Math.floor(canvas.height * 2 / 3) - 50;
    context.globalAlpha = 0.5; // draw bubbles semi-transparent
    for (var i = 0; i < 40; i++) {
        x = Math.floor(Math.random() * canvas.width);
        y = Math.floor(posHorizon + Math.random() * (canvas.height / 3) + 70);
        radius = Math.floor(Math.random() * 5) + 1;
        drawCircle(canvas, context, x, y, radius);
    }
    context.globalAlpha = 1;
}

function drawImage(canvas, context, x, y, imgName, imgSize = IMAGE_SIZE) {
    var img = new Image();
    img.src = "images/" + imgName;
    // images don't always load immediately, so we make sure the image is fully loaded before we draw it:
    img.onload = function () {
        context.drawImage(img, x, y, imgSize, imgSize);
    };

}

function drawText(canvas, context, text = "Happy sunshine!", color = "orange") {
    context.fillStyle = color;
    context.font = "bold 2em sans-serif";
    context.textAlign = "center";
    context.fillText(text, canvas.width / 2, canvas.height / 3);
}

