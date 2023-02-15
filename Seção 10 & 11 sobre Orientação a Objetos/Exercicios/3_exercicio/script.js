class Endereco {
    constructor (Rua, Bairro, cidade, estado) {
        this.Rua = Rua;
        this.Bairro = Bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.endereco = `Rua: ${Rua} | Bairro: ${Bairro} | Cidade: ${cidade} | Estado: ${estado}`;

    }

    atualizar (type, alteração) {
        if(type == "Rua"){
            this.Rua = alteração;
        }else if(type == "Bairro"){
            this.Bairro = alteração;
        }else if(type == "cidade"){
            this.cidade = alteração;
        }else if(type == "estado"){
            this.estado = alteração
        }
        this.endereco = `Rua: ${this.Rua} | Bairro: ${this.Bairro} | Cidade: ${this.cidade} | Estado: ${this.estado}`;
    }
}


let novoEndereço = new Endereco("Aberto Mosmann", "Muck", "Parobé", "Rio Grande do Sul");

let alterandoEndereço = prompt("Qual dado do endereço deseja alterar?\nRua\nBairro\nCidade\nEstado");

if(alterandoEndereço == "Rua"){
    let novaRua = prompt("Qual o nome da Rua?")
    novoEndereço.atualizar(alterandoEndereço, novaRua);
    alert("Alteração concluida!");
    alert(novoEndereço.endereco);
}else if(alterandoEndereço == "Bairro"){
    let confirmar = confirm("A cidade é a mesma?");
    if(confirmar == false){
        let novaCidade = prompt("Qual o nome da nova Cidade?");
        let novoBairro = prompt("Qual o nome do novo Bairro?");
        let novaRua = prompt("Qual o nome da nova Rua?");
        novoEndereço.atualizar("cidade", novaCidade);
        novoEndereço.atualizar("Bairro", novoBairro);
        novoEndereço.atualizar("Rua", novaRua);
        alert("Alteração concluida!");
        alert(novoEndereço.endereco);
    }else{
        let novoBairro = prompt("Qual o nome do novo Bairro?");
        novoEndereço.atualizar("Bairro", novoBairro);
        alert("Alteração concluida!");
        alert(novoEndereço.endereco);
    }
}else if(alterandoEndereço == "Cidade"){
    alert("Como esta alterando a cidade, será preciso alterar o Bairo e a Rua!");
    let novaCidade = prompt("Qual o nome da nova Cidade?");
    let novoBairro = prompt("Qual o nome do novo Bairro?");
    let novaRua = prompt("Qual o nome da nova Rua?");
    novoEndereço.atualizar("cidade", novaCidade);
    novoEndereço.atualizar("Bairro", novoBairro);
    novoEndereço.atualizar("Rua", novaRua);
    alert("Alteração concluida!");
    alert(novoEndereço.endereco);
}else if(alterandoEndereço == "Estado"){
    alert("Como esta alterando o estado, será preciso alterar a cidade, Bairo e a Rua!");
    let novoEstado = prompt("Qual o nome do Estado?")
    let novaCidade = prompt("Qual o nome da nova Cidade?");
    let novoBairro = prompt("Qual o nome do novo Bairro?");
    let novaRua = prompt("Qual o nome da nova Rua?");
    novoEndereço.atualizar("estado", novoEstado);
    novoEndereço.atualizar("cidade", novaCidade);
    novoEndereço.atualizar("Bairro", novoBairro);
    novoEndereço.atualizar("Rua", novaRua);
    alert("Alteração concluida!");
    alert(novoEndereço.endereco);
}
