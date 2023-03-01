class Cachorro {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir () {
        console.log("Au Au");
    }
    uivar () {
        console.log("Auuuuuuuu");
    };
}

Cachorro.prototype.patas = 4;

let husky = new Cachorro("Husky Siberiano", "Preto");

console.log(husky.raca);
console.log(husky.patas); 
console.log(husky.cor);
husky.latir();
husky.uivar();