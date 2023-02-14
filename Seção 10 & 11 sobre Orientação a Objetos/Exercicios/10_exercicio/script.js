let calculadora = {
    somar: function(valor1, valor2){
        return valor1 + valor2;
    },
    subtrair: function(valor1, valor2){
        return valor1 - valor2;
    },
    multiplicar: function(valor1, valor2){
        return valor1 * valor2;
    },
    dividir: function(valor1, valor2){
        return valor1 / valor2;
    }
}

console.log(calculadora.somar(1,2));
console.log(calculadora.subtrair(1,2));
console.log(calculadora.multiplicar(2,3));
console.log(calculadora.dividir(5,10));