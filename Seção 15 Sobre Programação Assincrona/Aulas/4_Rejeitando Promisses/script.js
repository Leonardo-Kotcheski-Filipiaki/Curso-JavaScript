let Conferindo = (num) => {
    return new Promise((resolve, reject) => {
        if(num == 2){
            resolve(console.log("O numero é 2"));
        }else{
            reject(new Error("Falhou!"))
            .catch((reason) => console.log(reason))
        }
    })
}

Conferindo(2);
Conferindo(8);