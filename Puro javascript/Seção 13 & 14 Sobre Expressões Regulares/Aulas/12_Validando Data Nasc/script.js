//Pratica sobre regex;

let validaData = /(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}/;

console.log(validaData.test("14/02/2004"));
console.log(validaData.test("14/02/2014"));