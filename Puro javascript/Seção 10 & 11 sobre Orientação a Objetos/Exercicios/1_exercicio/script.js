class banco {
    constructor (saldo) {
        this.saldo = saldo
    }
    saque (value, saldo) {
        if(saldo == 0){
            console.log("Saldo zerado, não poderá fazer nenhuma retirada de dinheiro!");
        }else if(saldo <= 0){
            console.log("Saldo negativo, pague o que deve!");
        }else if(saldo > 0 && saldo >= value){
            this.saldo = saldo -= value;
           console.log(`R$${value},00 retirado com sucesso! Seu saldo agora é: R$${this.saldo},00`); 
        }
    }
    deposito (value, saldo) {
        this.saldo = saldo += value;
        console.log(`Valor depositado, agora seu saldo é de R$${this.saldo},00`)
    }
}

let conta = new banco(100000);

conta.saque(100, conta.saldo);

console.log(conta.saldo);


conta.deposito(9000, conta.saldo);
