let erro = Promise.resolve(new Error("Não deu certo"));
console.log("Ixi");

erro.then((value) => console.log(value))
    .catch(reason => console.log("Falhou!"));