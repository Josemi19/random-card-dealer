window.onload = function () {
    let body = document.querySelector("#body")
    body.style.backgroundColor = "green"
    

    let card = document.querySelector("#card");
    card.style.width = "400px";
    card.style.height = "600px";
    card.style.backgroundColor = "white";
    card.style.margin = "0px auto";
    card.style.borderRadius = "15px";
    card.style.border = "3px solid black";
    card.style.display = "flex";
    card.style.justifyContent = "space-between"
    card.style.flexDirection = "column"

    let randomNumber = () => {
        let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let getRandomNumbers = Math.floor(Math.random() * numbers.length);
        return numbers[getRandomNumbers];
    }

    let number = document.createElement("span");
    number.style.padding = "160px";
    number.style.paddingTop = "190px";
    number.style.fontSize = "150px";
    number.style.position = "absolute";
    number.innerText = `${randomNumber()}`;
    card.appendChild(number);

    let randomPinta = () => {
        let pintas = [`♣`, `♠`, `♥`, `♦`];
        getRandomPintas = Math.floor(Math.random() * pintas.length);
        return pintas[getRandomPintas];
    }

    let pinta = randomPinta();

    let pintaTop = document.createElement("span");
    pintaTop.style.fontSize = "150px";
    pintaTop.style.paddingLeft = "15px";
    pintaTop.style.display = "flex"
    pintaTop.style.alignSelf = "start"
    pintaTop.style.color = `${pinta == `♥` || pinta == `♦` ? "red" : "black"}`
    pintaTop.innerHTML = `${pinta}`;
    card.appendChild(pintaTop);

    let pintaBottom = document.createElement("span");
    pintaBottom.style.fontSize = "150px";
    pintaBottom.style.paddingRight = "15px";
    pintaBottom.style.display = "flex"
    pintaBottom.style.alignSelf = "end"
    pintaBottom.style.color = `${pinta == `♥` || pinta == `♦` ? "red" : "black"}`
    pintaBottom.innerHTML = `${pinta}`;
    card.appendChild(pintaBottom);

    const reload = document.createElement("button");
    reload.innerText = "Actualizar"
    reload.style.padding = "5px"
    reload.style.display = "flex"
    reload.style.justifyContent = "center"
    body.appendChild(reload)
    reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
        location.reload();
    });
}