class Cachorro {
    constructor (raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
        this.uivar = function () {
            console.log("Auuuuuuuu");
        };
        this.latir = function () {
            console.log("Au Au");
        }
    }
}

let husky = new Cachorro("Husky Siberiano", 4, "Preto");

console.log(husky.raca);
console.log(husky.patas);
console.log(husky.cor);
husky.latir();
husky.uivar();