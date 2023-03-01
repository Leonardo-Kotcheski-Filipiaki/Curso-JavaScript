let arr = [1,2,3,4,5];

let arr1 = [];


function iterarArray (arr) {
    if(arr.length == 0){
        throw Error("O array precisa ter pelo menos um elemento");
    }else{
        for(let i = 0; i < arr.length; i++){
            console.log(i);
        }
    }
}


function arrayVazio(arr){
    if(arr.length > 0){
        throw Error ("O array tem que estar vazio!");
    }else{
        console.log("Agora deu certo!");
    }
}

iterarArray(arr);
//iterarArray(arr1);
//arrayVazio(arr);
arrayVazio(arr1);