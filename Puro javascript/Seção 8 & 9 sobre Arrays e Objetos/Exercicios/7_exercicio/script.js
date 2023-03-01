let arr = [1,2,3,4,5];
let calc;
let calculo;
for(let i = 0; i < arr.length; i++){
    calc = arr[i]+arr[i];
    calculo = calc + arr[i];
    console.log(calculo);
}