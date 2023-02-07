function idadeRecebe (idade) {
    if(idade >= 18){
        console.log("Você pode fazer aulas na Auto-Escola!");
    }else if(idade < 18){
        console.log("Você não pode fazer aulas na Auto-Escola!");
    }
}

idadeRecebe(22);
idadeRecebe(15);