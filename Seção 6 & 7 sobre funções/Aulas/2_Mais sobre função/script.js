function multiplicarTresNumeros(x,y,z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(1,4,5));

const multi = multiplicarTresNumeros(1,4,5);

console.log(`O valor da multiplicação é ${multi}`);

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir!");
    }else if(idade >= 18 && cnh == false){
        console.log("Se dirija a uma auto escola para fazer sua CNH");
    }else if(idade < 18 && cnh == false){
        console.log("Ainda não pode fazer a CNH");
    }else if(idade < 18 && cnh == true){
        console.log("Tem algo errado aqui!");
    }
}

let idade = prompt("Qual sua idade?")

let cnh = prompt("Possui CNH? *Responda com sim ou não*");

cnh = cnh.toLowerCase();

while(!(cnh == "sim" || cnh == "não")){
    let cnh = prompt("Possui CNH? *Responda com sim ou não*");
}

switch(cnh){
    case "sim":
        cnh = true;
        break;
    case "não":
        cnh = false;
        break;
}

podeDirigir(idade, cnh);