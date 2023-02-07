function randomNum(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}

let min = prompt("Qual o valor minimo para a randomização");
let max = prompt("Qual o valor maximo para a randomização");

console.log(randomNum(min, max));
