let btn = document.querySelector("#teste");
let btn2 = document.querySelector("#teste2");
let a = document.querySelector("a");

function msg (e){
    console.log("clicou!");
    e.stopPropagation();    
}

btn.addEventListener("click", msg);

btn2.addEventListener("click", (event) => {
    console.log(event);
});

function addLink (x) {
    x.setAttribute("target", "_blank")
    x.setAttribute("href", "https://www.youtube.com/watch?v=1GWQ-oDMG6g")
}

let i = 0;
a.addEventListener("click", (e) => {
    if(i == 0){
        a.innerHTML = "Agora sim, clica!"
        e.preventDefault();
        i = 1
    }else if(i == 1){
        addLink(a);
        i = i;
    }
})