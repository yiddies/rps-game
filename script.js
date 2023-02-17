let computerChoice = 0;
let playerChoice = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        if (buttons.id === 'paper' || buttons.id === 'scissors' || buttons.id === 'rock') {
            playerSelection(buttons);
            computerSelection(1, 3)
        } else {
            return;
        }
    });
});

function playerSelection(buttons) {
    if (buttons.id === 'paper') {
        return playerChoice = 2
        console.log(playerChoice)
    } else if (buttons.id === 'rock') {
        return playerChoice = 1
        console.log(playerChoice)
    } else if (buttons.id === 'scissors') {
        return playerChoice = 3
        console.log(playerChoice)
    } else {
        return
    }

}

function computerSelection(min, max) {
    computerChoice = Math.floor(Math.random() * (max - min + 1) + min)
    rpsGame(computerChoice)
}


function rpsGame() {
    if (playerChoice === 1 && computerChoice === 1) {
        console.log("Tie! try again.")
    } else if (playerChoice == 1 && computerChoice == 2) {
        console.log("You lost! try again.")
    } else if (playerChoice == 1 && computerChoice == 3) {
        console.log("You Won! try again.")
    } else if (playerChoice == 2 && computerChoice == 1) {
        console.log("You Won! try again.")
    } else if (playerChoice == 2 && computerChoice == 2) {
        console.log("Tie! try again.")
    } else if (playerChoice == 2 && computerChoice == 3) {
        console.log("You lost! try again.")
    } else if (playerChoice == 3 && computerChoice == 1) {
        console.log("You lost! try again.")
    } else if (playerChoice == 3 && computerChoice == 2) {
        console.log("You Won! try again.")
    } else {
        console.log("Tie! try again")
    }
}

computerSelection(1, 3)

