function criaCachorro (raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.pata = patas;
    cachorro.cor = cor;
    cachorro.latir = function () {
        console.log("Au au")
    }
    return cachorro;
}

let Pastor_Alemao = criaCachorro("Pastor Alemão", 4, "Marrom com pintas pretas");

console.log(Pastor_Alemao.raca);
console.log(Pastor_Alemao.pata);
console.log(Pastor_Alemao.cor);
Pastor_Alemao.latir();
