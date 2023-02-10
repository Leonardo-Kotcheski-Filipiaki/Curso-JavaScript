let num = 1;
let num1 = 8;
let num3 = 0;
let num10 = 20;

function imprimirNumero(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumero(num, num1, num3, num10);