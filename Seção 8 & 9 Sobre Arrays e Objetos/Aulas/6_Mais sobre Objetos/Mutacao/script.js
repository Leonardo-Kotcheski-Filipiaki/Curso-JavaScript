let pessoa ={
    nome: "Matheus"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Matheus" 
}

console.log(pessoa == pessoa2);
console.log(pessoa == pessoa3);

pessoa2.nome = "Pedro";

console.log(pessoa.nome);

pessoa.nome = "Maria";

console.log(pessoa2.nome);


/*
Ao sinalizar que a pessoa2 é igual a pessoa, significa que no caso de modificação dos valores de pessoa
pessoa2 também vai ter acesso, o que significa que pessoa e pessoa2 criaram um vinculo entre eles;
*/ 