//Normal:
const multiplicarPorDois = (x) =>{
    return x * 2;
}

console.log(`Normal: ${multiplicarPorDois(2)}`);

//Sem parenteses quando existe um só parametro, também se retiram as {}:

const multiplicarPorDoisNovamente = x => x * 2;


console.log(`Sem parenteses e sem chaves: ${multiplicarPorDoisNovamente(2)}`);