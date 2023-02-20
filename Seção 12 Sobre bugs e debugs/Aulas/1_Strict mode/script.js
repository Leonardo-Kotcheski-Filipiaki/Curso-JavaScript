"use strict"
//num = 0 Vai gerar um erro por que não está declarado var/let/const

let num = 0;

// delete Object.prototype | Vai gerar um erro no caso de for deletar algo que não pode

function teste() { // Como usar strict em função
    "use strict"
    let testando = "Teste"
    console.log(testando);
}


teste();

/*
Não se pode declarar 2 propriedades com o mesmo nome, se não vai gerar um erro.
ex:
let o = {p: 1, p: 2}

Não se pode declarar propriedades com valores primitivos
ex:
false.prop = "";
"teste".prop = "";
*/

