function soma (a, b){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(a + b);
        }, 2000);
    });
}

async function somaMais (a, b, c, d) {
    let x = soma(1,2);
    let y = soma(6,1);
    
    return await x + await y;
}

somaMais(2,6,1,2).then((values) => console.log(values));