'use strict';

const IMAGE_SIZE = 100;

window.onload = function () {
    // drawSeasight();
    setInterval(drawSeasight, 1000);
}

function drawSeasight() {
    var canvas = document.getElementById("mijnCanvas");
    var context = canvas.getContext("2d");
    var posHorizon = Math.floor(canvas.height * 2 / 3);
    // there's no 3D canvas yet; this is to make code futureproof

    // context.clearRect(0, 0, canvas.width, canvas.height);  // alles wissen
    drawSeaAndSky(canvas, context);
    drawSun(canvas, context);
    drawBoat(canvas, context, 275, posHorizon - 50, 150, 50);
    drawImage(canvas, context, 20, 0, "birds.png", 200);
    drawImage(canvas, context, Math.floor(Math.random() * (canvas.width - IMAGE_SIZE)),
        Math.floor(posHorizon + Math.random() * (canvas.height / 3 - IMAGE_SIZE)), "zeemeermin.png");
    drawText(canvas, context);
    drawBubbles(canvas, context);
}

function drawSeaAndSky(canvas, context) {
    var posHorizon = Math.floor(canvas.height * 2 / 3);
    context.fillStyle = "#ccffff";
    context.fillRect(0, 0, canvas.width, posHorizon);
    context.fillStyle = "#4b42f4";
    context.fillRect(0, posHorizon, canvas.width, Math.floor(canvas.height / 3));
}

function drawSun(canvas, context){
    drawCircle(canvas, context, 540, 60, 40, "yellow");
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

