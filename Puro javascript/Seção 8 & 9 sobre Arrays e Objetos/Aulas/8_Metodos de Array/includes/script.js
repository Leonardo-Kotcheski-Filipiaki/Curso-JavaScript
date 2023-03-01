// Encontra um determinado elemento em um array

let carros = ["BMW", "Chevrolet", "Volkswagem", "Renault"];

console.log(carros.includes("BMW")); // True
console.log(carros.includes("Fiat")); // False

if(carros.includes("BMW")){
    console.log("A marca BMW se encontra em estoque!");
}else{
    console.log("A marca BMW não se encontra em estoque!");
}