console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log('-----------|-----------');
console.log('Usando calculos abaixo');
console.log('-----------|-----------');
console.log(`5*5 == 25 && 5*3 == 20 = ${5*5 == 25 && 5*3 == 20}`); // FALSE
console.log(`5*5 == 25 && 5*3 == 15 = ${5*5 == 25 && 5*3 == 15}`); // TRUE
console.log(`2*5 == 10 || 5*3 == 20 = ${2*5 == 10 || 5*3 == 20}`); // TRUE
console.log(`2*5 == 5 || 5*3 == 15 = ${2*5 == 5 || 5*3 == 15}`); // TRUE
console.log(`2*5 == 10 || 5*3 == 15 = ${2*5 == 10 || 5*3 == 15}`); // TRUE
console.log(`2*5 == 5 || 5*3 == 5 = ${2*5 == 5 || 5*3 == 5}`); // TRUE
console.log('------------|-------------');
console.log('Usando comparações abaixo');
console.log('------------|-------------');
console.log(`5 > 3 && 4 > 3 = ${5 > 3 && 4 > 3}`) //TRUE
console.log(`5 < 3 && 4 < 3 = ${5 < 3 && 4 < 3}`) //FALSE
console.log(`5 > 3 || 4 > 3 = ${5 > 3 || 4 > 3}`) //TRUE
console.log(`5 < 3 || 4 < 3 = ${5 < 3 || 4 < 3}`) //FALSE
console.log(`'matheus' == 'matheus' = ${'matheus' == 'matheus'}`); //TRUE
console.log(`'matheus' == 'Matheus' = ${'matheus' == 'Matheus'}`); //FALSE

