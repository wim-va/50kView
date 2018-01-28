function Gemstone(name, price, soldOut, canBuy, shine = 0, createdOn = Date.now()) {
    this.name = name;
    this.price = price;
    this.soldOut = soldOut;
    this.canBuy = canBuy;
    this.shine = shine;
    this.createdOn = createdOn;
}

Gemstone.prototype.stars = function () {
    var result = "";
    for (i = 0; i < this.shine; i++) {
        result += "*";
    }
    return result;
}