/*
Usando shift e unshift em conjunto;
*/
let carros = ["BMW", "Chevrolet", "Volkswagem", "Corvette"];

let carroForaDeProdução = carros.shift();

console.log(carros); //['Chevrolet', 'Volkswagem', 'Corvette']

carros.unshift(carroForaDeProdução);

console.log(carros); //['BMW', 'Chevrolet', 'Volkswagem', 'Corvette']