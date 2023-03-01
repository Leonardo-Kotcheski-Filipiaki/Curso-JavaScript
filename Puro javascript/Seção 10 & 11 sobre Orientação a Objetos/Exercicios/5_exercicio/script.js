class ContaBancaria {
    constructor (saldoContaCorrente, saldoContaPoupanca, juros) {
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupanca = saldoContaPoupanca;
        this.juros = juros;
    }

    saque (value, type) {
        switch(type){
            case "corrente":
                if(this.saldoContaCorrente < value){
                    let confirmar = confirm("Você não tem saldo suficiênte na sua conta corrente!\nDeseja retirar da sua conta poupança?");
                    if(confirmar == true){
                        this.saque(value,"poupanca")
                    }else{
                        alert("OK, cancelando transações e fechando ação!");
                    }
                }else if(this.saldoContaCorrente >= value){
                    let confirmar = confirm(`Tem certeza que deseja retirar R$${value},00 da sua conta corrente?`);
                    if(confirmar == true){
                        this.saldoContaCorrente = this.saldoContaCorrente -= value
                        alert(`Você retirou com sucesso R$${value},00 da sua conta corrente!`);
                    }
                    
                }
                break;
            case "poupanca":
                if(this.saldoContaPoupanca < value){
                    let confirmar = confirm("Você não tem saldo suficiênte na sua conta poupança!\nDeseja retirar da sua conta corrente?");
                    if(confirmar == true){
                        this.saque(value,"corrente")
                    }else{
                        alert("OK, cancelando transações e fechando ação!");
                    }
                }else if(this.saldoContaPoupanca >= value){
                    let confirmar = confirm(`Tem certeza que deseja retirar R$${value},00 da sua conta poupança?`);
                    if(confirmar == true){
                        this.saldoContaPoupanca = this.saldoContaPoupanca -= value
                        alert(`Você retirou com sucesso R$${value},00 da sua conta poupança!`);
                    }
                    
                }
                break;
                
        }
    }

    deposito (type, value) {
        switch(type){
            case "corrente":
                if(value > 0){
                let confirmar = confirm("Tem certeza que deseja depositar na sua conta corrente?");
                if(confirmar == true){
                    this.saldoContaCorrente = this.saldoContaCorrente += value;
                }else{
                    let confirmar = confirm("Deseja depositar na sua conta poupança?")
                    if(confirmar == true){
                        this.deposito("poupanca", value)
                    }else{
                    alert("OK, cancelando transações e fechando ação!");
                    }
                }
            }
                break;
            case "poupanca":
                if(value > 0){
                let confirmar = confirm("Tem certeza que deseja depositar na sua conta poupança?");
                if(confirmar == true){
                    this.saldoContaPoupanca = this.saldoContaPoupanca += value;
                }else{
                    let confirmar = confirm("Deseja depositar na sua conta corrente?")
                    if(confirmar == true){
                        this.deposito("corrente", value)
                    }else{
                    alert("OK, cancelando transações e fechando ação!");
                    }
                }
            }
                break;
            
                
        }
    }

    accountMoneyTranfer (to, amount) {
        switch(to){
            case "corrente":
                if(amount > 0){
                    let confirmar = confirm("Deseja transferir da conta poupanca para a conta corrente?")
                    if(confirmar == true){
                        this.saldoContaCorrente = this.saldoContaCorrente += amount;
                        this.saldoContaPoupanca = this.saldoContaPoupanca -= amount;
                        alert(`Você transferiu R$${amount},00 da sua conta poupança para sua conta corrente!`);
                    }else{
                        alert("Operação cancelada!");
                    }
                }
                break;
            case "poupanca":
                if(amount > 0){
                    let confirmar = confirm("Deseja transferir da conta corrente para a conta poupanca?")
                    if(confirmar == true){
                        this.saldoContaCorrente = this.saldoContaCorrente -= amount;
                        this.saldoContaPoupanca = this.saldoContaPoupanca += amount;
                        alert(`Você transferiu R$${amount},00 da sua conta corrente para sua conta poupanca!`);
                    }else{
                        alert("Operação cancelada!");
                    } 
                }
            }
    }

    jurosDeAniversario(){
        let juros = (this.saldoContaPoupanca * this.juros) / 100;
        this.saldoContaPoupanca += juros;
    }
}

let contaNova = new ContaBancaria(1000, 12000, 1);



class ContaEspecial extends ContaBancaria{
    constructor (saldoContaCorrente, saldoContaPoupanca, juros) {
        super(saldoContaCorrente, saldoContaPoupanca, juros*2)
        
    }
}


contaNova.saque(1100, "corrente");

console.log(contaNova.saldoContaCorrente);
console.log(contaNova.saldoContaPoupanca);

contaNova.deposito("corrente", 19000);

console.log(contaNova.saldoContaCorrente);
console.log(contaNova.saldoContaPoupanca);

contaNova.accountMoneyTranfer("corrente", 4500);

console.log(contaNova.saldoContaCorrente);
console.log(contaNova.saldoContaPoupanca);

let conta2 = new ContaEspecial(1000, 20000, 1)

console.log(conta2);

conta2.saque(1000, "poupanca");

console.log(conta2);