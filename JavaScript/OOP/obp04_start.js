'use strict';

var rekening = new Rekening(2000,2010,4,1000);
console.log("%d EUR belegd tegen %d%% in %d geeft in het jaar %d als eindbedrag %d",
    rekening.startbedrag, rekening.rente, rekening.beginjaar, rekening.eindjaar, rekening.eindbedrag());
