function Cachorro (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function (){
        console.log("Au Au");
    }
}

let Husky = new Cachorro("Husky Siberiano", 4, "Preto");



console.log(Husky.raca);
console.log(Husky.cor);
console.log(Husky.patas);
Husky.latir();