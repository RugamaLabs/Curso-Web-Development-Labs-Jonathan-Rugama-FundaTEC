const lightContainer = document.querySelector(".light-container");


function createLight() {
    let light = document.createElement("div");
    light.classList.add("light");
    lightContainer.appendChild(light);

}

function createTurnOnOffButton() {
    body = document.querySelector("body");
    let buttonContainer = document.createElement("div");
    let button = document.createElement("button");
    button.textContent = "Turn on";
    button.classList.add("button");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(button);
    body.appendChild(buttonContainer);

    return button;

}


function main() {
    let patterns = [
        ["red", "green", "red", "green", "red", "green", "red", "green", "red", "green"],
        ["blue", "yellow", "blue", "yellow", "blue", "yellow", "blue", "yellow", "blue", "yellow"],
        ["green", "green", "red", "red", "green", "green", "red", "red", "green", "green"],
        ["yellow", "blue", "red", "yellow", "blue", "red", "yellow", "blue", "red", "yellow"],
        ["red", "red", "red", "red", "red", "green", "green", "green", "green", "green"]
    ];


    for (let i = 0; i < 10; i++) {
        createLight();
    }
    let lights = document.querySelectorAll(".light");
    let button = createTurnOnOffButton();
    button.addEventListener("click", () => {
        let seconds = 0;
        let i = 0;
        if (button.textContent === "Turn on") {
            button.textContent = "Turn off";
            function startCycle(seconds) {
                // 1. Caso Base (Condición de salida)
                // Si no detenemos la recursividad aquí, se ejecutaría infinitamente.

                for (i = 0; i < 10; i++) {

                    console.log(seconds, i);
                    if (seconds > 0) {
                        lights[i].classList.remove(patterns[seconds - 1][i]);
                    }
                    if (seconds === 0) {
                        lights[i].classList.remove(patterns[4][i]);
                    }
                    lights[i].classList.add(patterns[seconds][i]);
                }

                if (seconds === 4) {
                    seconds = 0;
                } else {
                    seconds++;
                }

                setTimeout(function () {
                    startCycle(seconds);
                }, 1500);
            }
            startCycle(seconds);
        } else {

            button.textContent = "Turn on";

        }
    })
}

main();