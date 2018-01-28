window.onload = function(e) {
	var bgcolorForm = document.getElementById('bgcolor');
	var fontForm = document.getElementById('font');
	var imageForm = document.getElementById('image');

	if (!localStorage['bgcolor']) {
		populateStorage();
	} else {
		setStyles();
	}

	bgcolorForm.onchange = populateStorage;
	fontForm.onchange = populateStorage;
	imageForm.onchange = populateStorage;
}

function populateStorage() {
	localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
	localStorage.setItem('font', document.getElementById('font').value);
	localStorage.setItem('image', document.getElementById('image').value);

	setStyles();
}

function setStyles() {
	var currentColor = localStorage.getItem('bgcolor');
	var currentFont = localStorage.getItem('font');
	var currentImage = localStorage.getItem('image');

	document.getElementById('bgcolor').value = currentColor;
	document.getElementById('font').value = currentFont;
	document.getElementById('image').value = currentImage;
	
	var htmlElem = document.querySelector('html');
	var imgElem = document.querySelector('img');

	htmlElem.style.backgroundColor = currentColor;
	htmlElem.style.fontFamily = currentFont;
	imgElem.setAttribute('src', currentImage);
}
