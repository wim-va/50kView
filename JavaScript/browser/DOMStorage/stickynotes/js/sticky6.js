var notes;

$(document).ready(function() {
	notes = $("#notes");

	$("#btnNew").click(function() {
		addNewNote();
	});
});

function addNewNote() {
	//notes.append("<li><a  href='#'><h2>Title</h2><p>Text content</p></a></li>");
	notes.append("<li><div class='colour'>"
	+ "<textarea class='note-title' placeholder='Untitled' maxlength='10'/>"
	+ "<textarea class='note-content' placeholder='Your content here'/>"
	+ "</div></li>"
	);
	
	notes.find("textarea.note-title:last").focus();
}
