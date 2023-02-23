let confereNome = /^(?=.{3,16}$)([a-z0-9-_])/

console.log(confereNome.test("matheus123_"));//True
console.log(confereNome.test("kjsdngjksdngjkns"));//True
console.log(confereNome.test("1234124124214124"));//True

console.log(confereNome.test("a"));//False
console.log(confereNome.test("241820948190284901284908129481948190"))//False