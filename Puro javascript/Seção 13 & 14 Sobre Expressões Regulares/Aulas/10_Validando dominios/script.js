//Pratica sobre regex;

let check = /w?w?w?.\w+.com|com.br/;

console.log(check.test("www.euquero.com"));
console.log(check.test("euquero.com"));
console.log(check.test(".euquero.com.br"));
console.log(check.test(".euquero.com."));
