var notes;

$(document).ready(function() {
	notes = $("#notes");

	$("#btnNew").click(function() {
		addNewNote();
	});
});

function addNewNote() {
	notes.append("<li><div class='colour'>"
			+ "<textarea class='note-title' placeholder='Untitled' maxlength='10'/>"
			+ "<textarea class='note-content' placeholder='Your content here'/>"
			+ "<img class='hide' src='images/close.png'/>"
			+ "</div></li>"
			);
	
	/**/
	configureLastNote();
}

function configureLastNote(){
	var newNote = notes.find("li:last");
	newNote.find("img").click(function() {
		newNote.remove();
	});
	newNote.find("textarea.note-title").focus();
}
