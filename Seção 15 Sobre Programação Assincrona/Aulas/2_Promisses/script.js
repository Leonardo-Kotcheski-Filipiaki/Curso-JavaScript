let prom = Promise.resolve(56*100);

console.log("Vai resolver...");

setTimeout(function(){
    prom.then((value) => {console.log(`O valor é ${value}`)})
    prom.then((value) => {console.log(`${value} + 5 = ${value+5}`)});
}, 2000);