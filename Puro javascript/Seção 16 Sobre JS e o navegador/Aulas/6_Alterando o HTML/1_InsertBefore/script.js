let novoElemento = document.createElement("p");

let elementoAlvo = document.querySelector("#titulo-principal");

let elementoPai = document.querySelector("#main-container");

elementoPai.insertBefore(novoElemento, elementoAlvo)

