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
Cachorro.prototype.raca = "SRD";

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let husky = new Cachorro("Husky Siberiano", "Preto");


console.log(Cachorro.prototype.raca);
console.log(husky.raca);

//Acessando symbol
console.log(Cachorro.prototype[patas])
console.log(husky[patas])