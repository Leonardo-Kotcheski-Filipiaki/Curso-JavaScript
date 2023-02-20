const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asfasfg"));
console.log(dia.test("05") && "05".length == 2);


const palavrasTresLetras = /\w\w\w/;

console.log(palavrasTresLetras.test("add"));
console.log(palavrasTresLetras.test("2020"));
console.log(palavrasTresLetras.test("as"));




