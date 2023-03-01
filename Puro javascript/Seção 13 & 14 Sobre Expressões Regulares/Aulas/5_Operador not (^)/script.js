const noTab = /[^ab]/;

console.log(noTab.test("a"));
console.log(noTab.test("Aqui tem a?"));

const notToaz = /[^a-z]/;

console.log(notToaz.test("asfafaf"));
console.log(notToaz.test("51a"));