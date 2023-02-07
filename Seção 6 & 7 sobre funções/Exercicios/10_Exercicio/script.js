//While
function diminuiAVida (valor){
    while(valor != 0){
        if(valor % 2 == 0){
            console.log(valor);
        }
        valor --
    }
}

diminuiAVida(10);
//For
function diminuiAVida2 (valor){
    for(i = valor; i != 0; i--){
        if(valor % 2 == 0){
            console.log(valor);
        }
        valor--;
    }
}

diminuiAVida2(800);