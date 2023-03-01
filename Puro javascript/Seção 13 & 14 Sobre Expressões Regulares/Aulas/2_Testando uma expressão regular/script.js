const reg1 = new RegExp('bola');

console.log(reg1.test('Tem bola?'));
console.log(reg1.test('Não tem?'));

const reg2 = /bola/;

console.log(reg2.test('Tem bola?'));
console.log(reg2.test('Não tem?'));

let texto = "Não tem bola não né?";
let texto2 = "E esse?"

if(reg2.test(texto)){
    console.log("Tem sim!");
}else{
    console.log("Tem não!");
}

if(reg2.test(texto2)){
    console.log("Tem sim!");
}else{
    console.log("Tem não!");
}