var screen = document.querySelectorAll(".screen");
var i = 0;

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {
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