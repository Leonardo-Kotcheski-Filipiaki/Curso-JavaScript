let novoElemento = document.createElement("p");

let texto = document.createTextNode("Um texto bem ruim!")

novoElemento.appendChild(texto);

let p = document.querySelector("#paragrafo-princ");

let pai = p.parentNode;

pai.appendChild(novoElemento);
