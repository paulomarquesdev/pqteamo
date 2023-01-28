var body = document.querySelector("body");
console.log(body[1])

for(var i = 1; i <= 4; i++){
    var element = body.querySelector(`screen${i}`)
    setTimeout(() => {
        element.classList.add("enabled")
    }, 2000)
    element.classList.remove("enabled")
}