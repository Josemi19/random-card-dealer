window.onload = () =>{
    let body = document.querySelector("#body")
    body.style.backgroundColor = "green"

    let card = document.querySelector("#card");
    card.style.width = "400px";
    card.style.height = "600px";
    card.style.backgroundColor = "white";
    card.style.margin = "0px auto";
    card.style.borderRadius = "15px";
    card.style.position = "relative";
    card.style.border = "3px solid black";

    let randomNumber = () => {
        let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
        getRandomNumbers = Math.floor(Math.random() * numbers.length);
        return numbers[getRandomNumbers];
    }

    let number = document.createElement("span");
    number.style.padding = "160px";
    number.style.paddingTop = "190px";
    number.style.fontSize = "150px";
    number.style.position = "absolute";
    number.innerText = `${randomNumber()}`;
    card.appendChild(number);

    let heart = document.createElement("span");
    heart.innerText = "♥";
    heart.style.fontSize = "150px";
    heart.style.color = "red";
    heart.style.position = "absolute";
    heart.style.paddingLeft = "15px";

    let diamond = document.createElement("span");
    diamond.innerText = "♦";
    diamond.style.fontSize = "150px";
    diamond.style.color = "red";
    diamond.style.position = "absolute";
    diamond.style.paddingLeft = "15px";

    let spade = document.createElement("span");
    spade.innerText = "♠";
    spade.style.fontSize = "150px";
    spade.style.position = "absolute";
    spade.style.paddingLeft = "15px";

    let club = document.createElement("span");
    club.innerText = "♣";
    club.style.fontSize = "150px";
    club.style.position = "absolute";
    club.style.paddingLeft = "15px";

    let randomPinta = () => {
    let pintas = [`${club}`, `${spade}`, `${heart}`, `${diamond}`];
    getRandomPintas = Math.floor(Math.random() * pintas.length);
    return pintas[getRandomPintas];
    }

    let pinta = document.createElement("span");
    pinta.innerHTML = `${randomPinta()}` ;
    card.appendChild(pinta);
}