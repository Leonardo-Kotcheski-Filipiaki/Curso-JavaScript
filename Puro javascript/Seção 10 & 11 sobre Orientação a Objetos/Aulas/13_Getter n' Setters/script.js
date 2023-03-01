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

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}


let pastor_Alemão = new Cachorro("Pastor Alemão", "Sem cor");

console.log(pastor_Alemão);

pastor_Alemão.setCor = "Marrom";

console.log(pastor_Alemão.getCor);


