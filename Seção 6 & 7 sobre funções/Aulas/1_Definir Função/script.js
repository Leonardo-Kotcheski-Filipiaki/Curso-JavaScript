function imprimirNoConsole(){
    console.log("Imprimindo no Console");
}

imprimirNoConsole();

function imprimirUmNumero(numero){
    console.log(`O numero digitado é: ${numero}`);
}

let numero = prompt("digite um numero!");

imprimirUmNumero(numero);

const numeroAleatorio = function() {
    console.log(Math.random()*2);
}

numeroAleatorio();

