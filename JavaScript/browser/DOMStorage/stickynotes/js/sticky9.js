// TODO: post-it op voorgrond bij droppen in vuilbak

var notes;

$(document).ready(function() {
	notes = $("#notes");

	$("#btnNew").click(function() {
		addNewNote();
	});
	
	/**/$("#bin").droppable({
		drop : function(event, ui) {
			var note = ui.draggable;
			note.remove();
			saveNotes();
		},
		/*
		over: function(event, ui){
			ui.draggable.css("z-index","1");
		}
		*/
	});
	
	/**/ $('#notes').droppable({tolerance:'touch',
		drop: function (event){
		// voorkom standaard gedrag van drop
		//  TODO: hoe kan dit intelligenter???
		notes.empty();
		loadNotes();
	}});

	loadNotes();
});

function addNewNote(title, content) {
	notes
			.append("<li><div class='colour'>"
					+ "<textarea class='note-title' placeholder='Untitled' maxlength='10'/>"
					+ "<textarea class='note-content' placeholder='Your content here'/>"
					+ "<img class='hide' src='images/close.png'/>"
					+ "</div></li>");
	configureLastNote(title, content);
	saveNotes();
}

function configureLastNote(title, content) {
	var newNote = notes.find("li:last");
	newNote.find("img").click(function() {
		newNote.remove();
		saveNotes();
	});
	var div = newNote.children("div");
	div.hover(null, function() {
		saveNotes();
	});

	if (title) {
		newNote.find("textarea.note-title").val(title);
	}

	if (content) {
		newNote.find("textarea.note-content").val(content);
	}

	newNote.find("textarea.note-title").focus();
	
	/**/ //newNote.draggable({containment: '#bin'});  // enkel dragbaar naar #bin
	/**/newNote.draggable();
}

function saveNotes() {
	var notesArray = [];

	notes.find("li > div").each(function(i, e) {
		var title = $(e).find("textarea.note-title");
		var content = $(e).find("textarea.note-content");

		notesArray.push({
			Index : i,
			Title : title.val(),
			Content : content.val(),
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
			addNewNote(storedNote.Title, storedNote.Content);
		}
	}
}
