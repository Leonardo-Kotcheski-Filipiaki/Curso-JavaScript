//Funciona como uma instrução na regex que tem função de ||('or'['ou']);

const reg = /\w+: (Matheus|João|Marcia)/ //Nome: asnfjkanfkjanfjn

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: asndfaknd"))