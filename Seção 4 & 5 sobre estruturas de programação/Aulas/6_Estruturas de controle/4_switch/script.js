let nome = "Nenhum";
while(!(nome == "João" || nome == "Pedro" || nome == "Leonardo")){
    nome = prompt("Escolha um nome:\nJoão\nPedro\nLeonardo");
}

switch(nome){
    case "João":
        console.log(`O nome é ${nome}`);
        break;
    case "Pedro":
        console.log(`O nome é ${nome}`);
        break;
    case "Leonardo":
        console.log(`O nome é ${nome}`);
        break;
}