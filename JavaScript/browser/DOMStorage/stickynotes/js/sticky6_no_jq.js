var notes;
window.onload = function () {
    notes = document.getElementById("notes");
    document.getElementById("btnNew").onclick = addNewNote;
};

function addNewNote() {
    var li = document.createElement('li');
    li.innerHTML += "<div class='colour'>"
        + "<textarea class='note-title' placeholder='Untitled' maxlength='10'></textarea>"
        + "<textarea class='note-content' placeholder='Your content here'></textarea>"
        + "</div>";
    notes.appendChild(li);

    var noteTitles = document.querySelectorAll("textarea.note-title");
    noteTitles[noteTitles.length - 1].focus();
}
