const soma = (numeroUm, numeroDois) => {
    if(numeroUm === undefined || numeroDois === undefined){
        console.log("Essa função precisa receber os dois valores");
    }else{
        console.log(`A soma de ${numeroUm} + ${numeroDois} é igual a: ${numeroUm + numeroDois}`);
    }
}

soma(1);
soma(1, 3);

const saudacao = (idade, nome) =>{

    if(idade === undefined && nome === undefined){
        console.log("É necessaria as informações de idade e nome para proseguir com a execução!")
    }else if(idade === undefined && nome != undefined){
        console.log("É necessaria as informações de idade para proseguir com a execução!")
    }else if(idade != undefined && nome === undefined){
        console.log("É necessaria as informações de nome para proseguir com a execução!");
    }else{
        console.log(`Bem-Vindo! seu nome é ${nome} e você possui ${idade} anos de idade.`);
    }
}

saudacao(19, "José");
saudacao(19, undefined);
saudacao(undefined ,"José");

