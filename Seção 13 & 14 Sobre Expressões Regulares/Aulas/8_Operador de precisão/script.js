const cep = /\d{5}-\d{3}/;

console.log(cep.test("95630-000"));
console.log(cep.test("95630000"));
console.log(cep.test("95630-00"));
console.log(cep.test("9530-00"));
console.log(cep.test(" "));