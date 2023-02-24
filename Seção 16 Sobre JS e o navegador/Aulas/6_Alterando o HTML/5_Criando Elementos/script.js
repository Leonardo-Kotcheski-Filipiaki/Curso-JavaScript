let lista = document.createElement('ul');

for(i = 0; i < 5; i++){
    let item = document.createElement('li');

    let texto = document.createTextNode("Texto lista " + i);

    lista.appendChild(item);

    item.appendChild(texto);
}

let container = document.querySelector("#main-container");

container.appendChild(lista);

