class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);
 
class Cachorro extends Mamifero {
    constructor (patas, raca) {
        
        super(patas, patas);

        this.raca = raca;
    }
    latir (){
        console.log("Au au");
    }
}

let pug = new Cachorro(4, "Pug");

console.log(pug.patas);
console.log(pug.raca);
pug.latir();