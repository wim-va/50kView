'use strict';

var toetsenbord = require('readline-sync');

function TV() {
    this.post = 0;
}

TV.prototype.getProgramma = function () {
        var programma = "";
        switch (this.post) {
            case 0:
                programma = "K3 en de regenboogprinses";
                break;
            case 1:
                programma = "Belgie-Spanje";
                break;
            case 2:
                programma = "Parijs-Tours";
                break;
            case 3:
                programma = "Lotto uitslag";
                break;
            default:
                programma = "Ooit \"FC De Kampioenen\" gemist?";
                break;
        }
        return programma;
    }

var tv = new TV();
tv.post = 2;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
var post = parseInt(toetsenbord.question("Geef post: "));
tv.post = post;
programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
