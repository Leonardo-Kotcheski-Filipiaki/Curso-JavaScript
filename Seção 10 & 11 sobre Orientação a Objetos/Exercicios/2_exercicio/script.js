class Carrinho {
    constructor (itens, quantitade_Total, valor_Total) {
        this.itens = []
        this.itens.unshift(itens)
        this.quantitade_Total = []
        this.quantitade_Total.unshift(quantitade_Total);
        this.valor_Total = []
        this.valor_Total.unshift(valor_Total);
    }
    remover (item) {
        let local = this.itens.indexOf(item);
        this.itens.splice(local);
        this.quantitade_Total.splice(local);
        this.valor_Total.splice(local);
    }
    adicionar(item, quantidade, valor_Total) {
        this.itens.unshift(item);
        this.quantitade_Total.unshift(quantidade);
        this.valor_Total.unshift(valor_Total);
    }
}

let CarrinhoMeu = new Carrinho ("Bolsa", 1, 210);

CarrinhoMeu.remover("Bolsa");
 
console.log(CarrinhoMeu.itens);

CarrinhoMeu.adicionar("Samsung M4", 1, 1280);
CarrinhoMeu.adicionar("Notebook HD", 2, 1890);

console.log(CarrinhoMeu.itens);

CarrinhoMeu.remover("Samsung M4");

console.log(CarrinhoMeu.itens);