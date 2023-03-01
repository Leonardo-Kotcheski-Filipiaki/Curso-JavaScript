

let confereMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(confereMarca.test("Marca: Nike"));//True
console.log(confereMarca.test("Marca Adidas"));//False
console.log(confereMarca.test("Puma"));//False
console.log(confereMarca.test("Marca: "));//False

