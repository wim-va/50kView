app.controller("BroodjesController", function () {
    this.broodjes = [new Broodje("Kaas", 3.10),
    new Broodje("Ham", 2.80),
    new Broodje("Kaas en ham", 4.20),
    new Broodje("Pr\u00E9par\u00E9", 2.30),
    new Broodje("Kip curry", 3.0)];
    this.bestelling = new Bestelling();
    this.aantal = 1;
    this.submit = function () {
        this.bestelling.voegLijnToe(new BestelLijn(this.gekozenBroodje, this.aantal));
        this.aantal = 1;
    }
    this.totaalprijs = function(){
        return this.bestelling.totaalprijs();
    }
})