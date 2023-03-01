//Retorna um objeto com informações do Regex
//Se nada for encontrado, retorna null

const digitos = /\d+/;

console.log(digitos.exec("teste1"));
console.log(digitos.exec("Tem o numero 100 aqui!"));