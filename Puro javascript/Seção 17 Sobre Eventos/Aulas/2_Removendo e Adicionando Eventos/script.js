let btn = document.querySelector("#teste");
let btn2 = document.querySelector("#teste2");
let btn3 = document.querySelector("#teste3");
let i = 0;
function msg(){
    console.log("Clicou!")
}

btn.addEventListener("click", msg)

btn2.addEventListener("click", () => {
    
    if(i == 0){
        i++
        btn.removeEventListener("click", msg);
        btn3.addEventListener('click', msg)
        btn3.innerHTML = "Esse agora!";
        btn.innerHTML = "Não esse!"
    }else if(i == 1){
        i--
        btn.addEventListener("click", msg);
        btn3.removeEventListener("click", msg);
        btn.innerHTML = "Esse agora!";
        btn3.innerHTML = "Não esse!"
    }
})