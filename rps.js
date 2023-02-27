const compChoiceDisplay = document.getElementById("chomputer-choice");
const userChoiceDisplay= document.getElementById("user-choice");
const resustDisplay = document.getElementById("result");
const userScoresDisplay = document.getElementById("user-scores");
const compScoresDisplay = document.getElementById("comp-scores");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let compChoice;
let result;
let compScores = 0;
let userScores = 0;

possibleChoices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    compFunc();
    resultFunc();
    scoresFunc();
}))

function compFunc() {

    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        compChoice = "rock";
    }
    else if (randomNum === 1) {
        compChoice = "paper";
    }
    else {
        compChoice = "scissors";
    }
    compChoiceDisplay.innerHTML = compChoice;
}

function resultFunc() {
    if (userChoice === compChoice) {
        result = "voch-voqi !";
    }
    if (userChoice === "rock" && compChoice === "paper") {
        result = "duq partveciq";
    }
    if (userChoice === "rock" && compChoice === "scissors") {
        result = "duq haghteciq";
    }
    if (userChoice === "paper" && compChoice === "rock") {
        result = "duq haghteciq";
    }
    if (userChoice === "paper" && compChoice === "scissors") {
        result = "duq partveciq";
    }
    if (userChoice === "scissors" && compChoice === "rock") {
        result = "duq partveciq";
    }
    if (userChoice === "scissors" && compChoice === "paper") {
        result = "duq haghteciq";
    }
    resustDisplay.innerHTML = result;
}
function scoresFunc() {
    if (result === "duq haghteciq") {
        userScores += 1;
    }
    else if (result === "duq partveciq") {
        compScores += 1;
    }
    userScoresDisplay.innerHTML = userScores;
    compScoresDisplay.innerHTML = compScores;
}






