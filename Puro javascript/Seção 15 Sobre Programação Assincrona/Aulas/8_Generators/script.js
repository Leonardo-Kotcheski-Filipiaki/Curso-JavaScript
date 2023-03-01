function* criadorDeID () {
    let id = 0;
    while(true) {
        yield id++;
    }   
}

let criaId = criadorDeID();

console.log(criaId.next().value);
console.log(criaId.next().value);