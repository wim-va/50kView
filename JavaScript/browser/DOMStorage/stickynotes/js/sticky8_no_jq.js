var notes;
window.onload =  function() {
	notes = document.getElementById("notes");
	document.getElementById("btnNew").onclick = addNewNote;
    loadNotes();
};

function addNewNote(e, title, content) {
    var li = document.createElement('li');
    li.innerHTML = "<div class='colour'>"
        + "<textarea class='note-title' placeholder='Untitled' maxlength='10'></textarea>"
        + "<textarea class='note-content' placeholder='Your content here'></textarea>"
        + "<img class='hide' src='images/close.png'/>"
        + "</div>";
    notes.appendChild(li);

    var noteTitles = document.querySelectorAll("textarea.note-title");
    noteTitles[noteTitles.length-1].focus();

	configureLastNote(title, content);
    /**/ saveNotes();
}

function configureLastNote(title, content){
	var newNote = notes.querySelector("li:last-child");
	newNote.querySelector("img").onclick = function() {
		newNote.remove();
		/**/ saveNotes();
	};
	var div = newNote.querySelector("div");
	div.onmouseout = saveNotes;
    if (title) {
		newNote.querySelector("textarea.note-title").value = title;
	}
	if (content) {
		newNote.querySelector("textarea.note-content").value = content;
	}
	newNote.querySelector("textarea.note-title").focus();
}

function saveNotes() {
	var notesArray = [];

	notes.querySelectorAll("li > div").forEach(function(e, i, a) {
		var title = e.querySelector("textarea.note-title");
		var content = e.querySelector("textarea.note-content");

		notesArray.push({
			index : i,
			title : title.value,
			content : content.value,
		});
	});

	var jsonStr = JSON.stringify(notesArray);
	localStorage.setItem("notes", jsonStr);
}

function loadNotes() {
	var storedNotes = localStorage.getItem("notes");
	if (storedNotes) {
		var notesArray = JSON.parse(storedNotes);
		for (var i = 0; i < notesArray.length; i++) {
			var storedNote = notesArray[i];
			addNewNote(null, storedNote.title,
					storedNote.content);
		}
	}
}
