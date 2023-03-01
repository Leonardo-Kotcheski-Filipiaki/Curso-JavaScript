const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1234124"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test(" "));
console.log(umOuMaisNumeros.test("Teste"));