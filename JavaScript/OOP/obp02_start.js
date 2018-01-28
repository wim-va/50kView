'use strict';

var toetsenbord = require('readline-sync');

var tv = new TV();
tv.post = 2;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
var post = parseInt(toetsenbord.question("Geef post: "));
programma = tv.getProgramma();
tv.post = post;
console.log("Op post %d spelen ze '%s'", tv.post, programma);
