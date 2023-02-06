let idade = 18;
let cnh = false;

if(idade >= 18 && cnh == false){
    console.log("Faça a CNH(Carteira Nacional de Habilitação) para poder dirigir!");
}else if(idade >= 18 && cnh == true){
    console.log("Parabens! Você pode dirigir");
}else if(idade < 18 && cnh == false){
    console.log("Infelizmente não pode dirigir ainda!");
}else if(idade < 18 && cnh == true){
    console.log("TEM ALGO ERRADO AQUI!");
}