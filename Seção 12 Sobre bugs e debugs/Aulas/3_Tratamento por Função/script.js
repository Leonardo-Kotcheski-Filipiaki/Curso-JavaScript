function checarNumero (num) {
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log("Por favor digite apenas numeros!");
    }else{
        console.log(number);
    }
}


checarNumero(50);
checarNumero("5");
checarNumero("adasdw");