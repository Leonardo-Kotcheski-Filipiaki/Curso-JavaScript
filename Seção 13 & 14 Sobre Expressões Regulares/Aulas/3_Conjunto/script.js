const reg1 = /[1234]/ 

console.log(reg1.test("Temos o numero 1?"));
console.log(reg1.test("Temos o numero 50?"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos 78 aqui?"));
console.log(reg2.test("Temos 12341 aqui?"));



