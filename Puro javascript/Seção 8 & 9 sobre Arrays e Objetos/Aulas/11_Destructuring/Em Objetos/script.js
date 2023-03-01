//Destructuring é criar variaveis com valores de objetos;

let carro = {
    rodas: 4,
    portas:4,
    teto_solar:true,
    motor: '2.0'
}

const {rodas: vRodas, portas: vPortas, teto_solar: vteto, motor: vMotor} = carro;

console.log(vRodas);
console.log(vPortas);
console.log(vteto);
console.log(vMotor);

