window.addEventListener("keydown", function (e) {
    if(e.key == "n"){
        this.window.open("https://www.youtube.com/watch?v=1GWQ-oDMG6g", "_blanc")
    }   
})

window.addEventListener("keyup", function(e){
    if(e.key == "d"){
        alert("Cuidado com os ouvidos!");
        setTimeout(() =>{
            this.window.open("https://www.youtube.com/watch?v=g1DWkw6cAL4", "_blanc");
        }, 2000);
        
    }
})