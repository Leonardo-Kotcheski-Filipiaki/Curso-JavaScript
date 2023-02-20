/*
\d - Qualquer dígito de caractere;

\w - Um caractere alfanumérico("Teste");

\s - Qualquer caractere de espaço em branco;

\D - Caracteres que não são digitos;

\W - Caracteres não-Alfanuméricos;

\S - Caractere que não seja espaço em branco;

. - Qual caractere, menos nova linha;
*/

const pontoRegex = /./;
console.log("/./")
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("12315"));
console.log(pontoRegex.test("asd1231"));

console.log("----------------------------------------------")

console.log('/\\d/')
const dRegex = /\d/; 

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("12315"));
console.log(dRegex.test("asd1231"));

console.log("----------------------------------------------")

console.log('/\\D/')

const DRegex = /\D/; 

console.log(DRegex.test("asd"));
console.log(DRegex.test(" "));
console.log(DRegex.test("12315"));
console.log(DRegex.test("asd1231"));

console.log("----------------------------------------------")

console.log('/\\s/')

const sRegex = /\s/; 

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("12315"));
console.log(sRegex.test("asd1231"));

console.log("----------------------------------------------")

console.log('/\\S/')

const SRegex = /\S/; 

console.log(SRegex.test("asd"));
console.log(SRegex.test(" "));
console.log(SRegex.test("12315"));
console.log(SRegex.test("asd1231"));

console.log("----------------------------------------------")

console.log('/\\w/')

const wRegex = /\w/; 

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("12315"));
console.log(wRegex.test("asd1231"));

console.log("----------------------------------------------")

console.log('/\\W/')

const WRegex = /\W/; 

console.log(WRegex.test("asd"));
console.log(WRegex.test(" "));
console.log(WRegex.test("12315"));
console.log(WRegex.test("asd1231"));

console.log("----------------------------------------------")



