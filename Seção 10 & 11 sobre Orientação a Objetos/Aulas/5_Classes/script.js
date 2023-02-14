let cachorros = {
    patas: 4,
    raca: "SRD",
    latir: function () {
        console.log("Au au");
    }
}

let labrador = Object.create(cachorros);

labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorros.raca);

let pastor_Alemao = Object.create(cachorros);

pastor_Alemao.raca = "Pastor Alemão";

console.log(pastor_Alemao.raca);