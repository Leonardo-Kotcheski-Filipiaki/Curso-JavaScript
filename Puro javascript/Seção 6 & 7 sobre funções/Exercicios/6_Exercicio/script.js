const tipoDado = (dado) =>{
    if(typeof(dado) === "boolean"){
        console.log("Essa dado é um booleano!");
    }else if(typeof(dado) === "number"){
        console.log("Esse dado é um number!");
    }else if(typeof(dado) === "string"){
        console.log("Esse dado é uma string!");
    }
}

tipoDado("Matheus");
tipoDado(10);
tipoDado(true);
tipoDado(false);

