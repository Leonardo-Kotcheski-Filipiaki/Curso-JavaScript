let arr = [1,4,5,1,2,3,7];

let nomes = ["Matheus", "João", "Pedro"];

let bol = [true, false, false, true];

let misturado = ["Matheus", 1, true];

console.log(arr);
console.log(nomes);
console.log(bol);
console.log(misturado);

//Usando for para percorrer um array;

for(let i = 0; i <= arr.length - 1; i++){
    console.log(arr[i]);
}

//Usando While para percorrer um array
let i = 0
while(i <= nomes.length  - 1){
    console.log(nomes[i]);
    i++
}

//Usando do While para percorrer um array
let l = 0
do{
    console.log(bol[l]);
    l++
}while(l <= bol.length  - 1);

