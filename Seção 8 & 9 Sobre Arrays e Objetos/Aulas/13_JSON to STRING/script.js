let pessoa = {
    nome: "Leonardo",
    idade: 28,
    profissao: "Programador",
    Hobbies: ["Video Game", "Assistir Campeonatos de jogos FPS", "Animes"]
}
//Passa um objeto para String;
let string = JSON.stringify(pessoa);

console.log(string);

//Passa uma string para objeto;
let obj = JSON.parse(string);

console.log(obj);

//Exibe um elemento do obj
console.log(obj.Hobbies[0]);
