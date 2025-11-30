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
    let colorPattern1 = ["red", "green", "red", "green", "red", "green", "red", "green", "red", "green"];
    let colorPattern2 = ["blue", "yellow", "blue", "yellow", "blue", "yellow", "blue", "yellow", "blue", "yellow"];
    let colorPattern3 = ["green", "green", "red", "red", "green", "green", "red", "red", "green", "green"];
    let colorPattern4 = ["yellow", "blue", "red", "yellow", "blue", "red", "yellow", "blue", "red", "yellow"];
    let colorPattern5 = ["red", "red", "red", "red", "red", "green", "green", "green", "green", "green"];

    for (let i = 0; i < 10; i++) {
        createLight();
    }
    let button = createTurnOnOffButton();

    button.addEventListener("click", () => {
        if (button.textContent === "Turn on") {
            button.textContent = "Turn off";

        } else {
            button.textContent = "Turn on";
        }
    })
}

main();