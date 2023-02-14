function Cachorro (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function () {
    console.log("Auuuuuuuu");
}

Cachorro.prototype.latir = function () {
    console.log("Au au");
}

let Husky = new Cachorro("Husky Siberiano", 4, "Preto");



console.log(Husky.raca);
console.log(Husky.cor);
console.log(Husky.patas);
Husky.uivar();
Husky.latir();