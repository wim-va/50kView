var notes;
window.onload =  function() {
	notes = document.getElementById("notes");
	document.getElementById("btnNew").onclick = addNewNote;
};

function addNewNote() {
    var li = document.createElement('li');
    li.innerHTML = "<div class='colour'>"
        + "<textarea class='note-title' placeholder='Untitled' maxlength='10'></textarea>"
        + "<textarea class='note-content' placeholder='Your content here'></textarea>"
        + "<img class='hide' src='images/close.png'/>"
        + "</div>";
    notes.appendChild(li);

    var noteTitles = document.querySelectorAll("textarea.note-title");
    noteTitles[noteTitles.length-1].focus();

	/**/  configureLastNote();
}

function configureLastNote(){
	var newNote = notes.querySelector("li:last-child");
	newNote.querySelector("img").onclick = function() {
		newNote.remove();
	};
	newNote.querySelector("textarea.note-title").focus();
}
