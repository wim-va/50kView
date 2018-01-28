 function HogerLager() {
    this.teRaden = 1 + Math.floor(Math.random() * 100);
    this.aantalBeurten = 0;
    this.geraden = false;
}

HogerLager.prototype.verwerkGok = function (gok) {
        this.aantalBeurten++;
        if (this.teRaden < gok) {
            return "Lager";
        }
        if (this.teRaden > gok) {
            return "Hoger";
        }
        else {
            this.geraden = true;
            return "Juist";
        }
    };

HogerLager.prototype.reset = function () {
        this.geraden = false;
        this.aantalBeurten = 0;
        this.teRaden = 1 + Math.floor(Math.random() * 100);
    };