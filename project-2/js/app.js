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
    let contador = 0;
    button.addEventListener("click", () => {
        if (button.textContent === "Turn on") {
            button.textContent = "Turn off";
            function cuentaRegresiva(segundos) {
                // 1. Caso Base (Condición de salida)
                // Si no detenemos la recursividad aquí, se ejecutaría infinitamente.
                if (segundos < 0) {
                    console.log("¡Tiempo terminado!");
                    return;
                }

                // 2. Acción actual
                console.log(segundos);

                // 3. Llamada Recursiva con Retraso
                // Llamamos a la misma función, pero con (n - 1) y esperamos 1000ms (1s).
                setTimeout(function () {
                    cuentaRegresiva(segundos - 1);
                }, 1000);
            }
            cuentaRegresiva(10);
        } else {
            button.textContent = "Turn on";
        }
    })
}

main();