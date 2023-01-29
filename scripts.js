var screen = document.querySelectorAll(".screen");

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {
    var i = 0;
    while (i<4){
        var element = screen[i]
        element.style.display = "flex";
        await sleep(700);
        element.style.display = "none";

        if (i!==3){
            i++;
        } else {
            i = 0;
        }
    }
}

main()