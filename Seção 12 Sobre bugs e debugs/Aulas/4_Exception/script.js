function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("Parametro 'nome' precisa ser uma string");
    }else{
        console.log(`Olá ${nome}`);
    }
}

saudacao("Matheus");

saudacao(51);

// function checaNumeros (num){
//     let number = Number(num);
//     if(Number.isNaN(number)){
//         throw new Error("Parametro 'numero' deve ser do tipo number");
//     }else{
//         console.log(`O numero digitado foi ${number}`);
//     }
// }

// checaNumeros(5);
// checaNumeros("50");
// checaNumeros("Leo");