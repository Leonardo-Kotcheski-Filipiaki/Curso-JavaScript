let carro = {
    portas: 2,
    porta_malas: "200 Litros",
    motor: 2.0
}

let adicionais = {
    Teto_Solar: true,
    Ar_condicionado: true
}

Object.assign(carro, adicionais);

console.log(carro.portas);
console.log(carro.porta_malas);
console.log(carro.motor);
console.log(carro.Teto_Solar);
console.log(carro.Ar_condicionado);

/*Object.assign(1, 2);
1 - Objeto que vai receber propriedades
2 - Objeto que vai ceder as propriedades
*/