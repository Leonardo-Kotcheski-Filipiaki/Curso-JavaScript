let btn = document.querySelector("#teste");
let btn2 = document.querySelector("#teste2");
let p = document.querySelector("p");

function msg (e){
    console.log("clicou!");
    e.stopPropagation();    
}

btn.addEventListener("click", msg);

btn2.addEventListener("click", (event) => {
    console.log(event);
});

p.addEventListener("click", () => {
    console.log("Clicou no paragrafo!");
})