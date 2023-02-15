class Carro {
    constructor (marca, cor, gasolina_restante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolina_restante = gasolina_restante;
        this.consumo = consumo
    }
    dirigir (km) {
        if(this.gasolina_restante >= this.consumo){
            let litrosConsumidos = km/this.consumo;
            this.gasolina_restante = this.gasolina_restante -= litrosConsumidos;
            console.log(`Você dirigiu o carro, foram gastos ${litrosConsumidos} litros de gasolina, sobraram: ${this.gasolina_restante}`)
        }else if(this.gasolina_restante <= 3){
            console.log("Abasteça o carro!");
        }
        
    }
    abastecer () {
        this.gasolina_restante = this.gasolina_restante += 10
        console.log("Carro abastecido!");
    }
}

let Volvo = new Carro("Volvo", "Preto", 4, 4);

Volvo.dirigir(7);
Volvo.dirigir(5);
Volvo.abastecer();
Volvo.dirigir(10);
Volvo.dirigir(23);
Volvo.dirigir(1);
Volvo.abastecer();
Volvo.dirigir(24);
Volvo.dirigir(13);
Volvo.dirigir(18);

