let arr = [1,2,3,4,5,6,7,8,1];

let arr1 = [1,3,4,5];

let verifica = (arr) =>{
    if(arr.length >= 5){
        console.log("Muitos elementos!");
    }else{
        console.log("Poucos elementos!");
    }
}

verifica(arr);
verifica(arr1);