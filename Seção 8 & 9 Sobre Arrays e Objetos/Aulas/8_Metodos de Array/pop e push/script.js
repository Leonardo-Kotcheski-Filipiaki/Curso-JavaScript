/*
Uso conjunto do pop e do push
exemplo:
*/
let numeros = [1,2,3,4,5,1,2];

let numeroRemovido = numeros.pop();

console.log(numeros) //[1,2,3,4,5,1]

numeros.push(numeroRemovido)

console.log(numeros) //[1,2,3,4,5,1,2]

