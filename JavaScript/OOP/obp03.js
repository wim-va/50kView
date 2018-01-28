'use strict';

var toetsenbord = require('readline-sync');

function TV2() {
    this.post = 0;
    this.uur = 20;
}

TV2.prototype.getProgramma = function () {
    var programma = "";
    switch (this.post) {
        case 0:
            programma = this.getProgrammaPost0();
            break;
        case 1:
            programma = this.getProgrammaPost1();
            break;
        default:
            programma = "onbeschikbare post";
            break;
    }
    return programma;
}

TV2.prototype.getProgrammaPost1 = function () {
    var programma = "";
    if (this.uur < 19) programma = "sport";
    else if (this.uur < 20) programma = "voetbal";
    else programma = "sport";
    return programma;

}
TV2.prototype.getProgrammaPost0 = function () {
    var programma = "";
    if (this.uur < 18) programma = "Tik Tak";
    else if (this.uur < 19) programma = "Samson en Gert";
    else programma = "K3 in het sportpaleis";
    return programma;

}

var post = parseInt(toetsenbord.question("Geef post: "));
var uur = parseInt(toetsenbord.question("Geef uur: "));
var tv = new TV2();
tv.post = post;
tv.uur = uur;
var programma = tv.getProgramma();
console.log("Om %d uur speelt op post %d het programma '%s'\n", tv.uur, tv.post, programma);