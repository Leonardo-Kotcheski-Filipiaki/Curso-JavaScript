/*
O metodo Slice cria um segundo array selecionando informações do primeiro array, usando um intervalo
passado na declaração do metodo.
*O primeiro array continua inteiro, não tem remoção de informações.
*/
let arr = [1,2,3,4,5,6,7];


//Aqui ele vai criar um segundo array usando as informações presentes entre o intervalo de indice 0 a 3.
console.log(arr.slice(0,3));

//Aqui ele vai criar um segundo array a partir do indice de numero 2 (0, 1, 2... [indice]);
console.log(arr.slice(2))

/*Ao colocar um simbolo de negativo antes do numero, o slice irá selecionar os ultimos elementos do array*/
console.log(arr.slice(-2)) //coletará os 2 ultimos elementos do array

/*Ao colocar um indice positivo e um negativo*/
console.log(arr.slice(3,-1)) //coletará as informações a partir do terceiro indice e retirará a ultima.

