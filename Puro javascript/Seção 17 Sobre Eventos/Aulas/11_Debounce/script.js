let timeOut;

window.addEventListener("mousemove", function (e) {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
        console.log(e.x)
    }, 500)

});