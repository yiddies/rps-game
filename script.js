let computerChoice = 0;
let playerChoice = 0;
let wins = 0;
let losses = 0;


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
        playerText.innerHTML = "Players Choice: Paper"
        return playerChoice = 2
    } else if (buttons.id === 'rock') {
        playerText.innerHTML = "Players Choice: Rock"
        return playerChoice = 1
    } else if (buttons.id === 'scissors') {
        playerText.innerHTML = "Players Choice: Scissors"
        return playerChoice = 3
    } else {
        return
    }

}

function computerSelection(min, max) {
    computerChoice = Math.floor(Math.random() * (max - min + 1) + min)
    rpsGame(computerChoice)
    if (computerChoice === 1) {
        computerText.innerHTML = "Computers Choice: Rock"
    } else if (computerChoice === 2) {
        computerText.innerHTML = "Computers Choice: Paper"
    } else {
        computerText.innerHTML = "Computers Choice: Scissors"
    }
}


function rpsGame() {
    if (playerChoice === 1 && computerChoice === 1) {
        winnerText.innerHTML = "Tie! try again."
    } else if (playerChoice == 1 && computerChoice == 2) {
        winnerText.innerHTML = "You lost! try again."
        losses += 1
        loss.innerHTML = "Losses: " + losses;
    } else if (playerChoice == 1 && computerChoice == 3) {
        winnerText.innerHTML = "You Won! try again."
        wins += 1
        win.innerHTML = "Score: " + wins;
    } else if (playerChoice == 2 && computerChoice == 1) {
        winnerText.innerHTML = "You Won! try again."
        wins += 1
        win.innerHTML = "Score: " + wins;
    } else if (playerChoice == 2 && computerChoice == 2) {
        winnerText.innerHTML = "Tie! try again."
    } else if (playerChoice == 2 && computerChoice == 3) {
        winnerText.innerHTML = "You lost! try again."
        losses += 1
        loss.innerHTML = "Losses: " + losses;
    } else if (playerChoice == 3 && computerChoice == 1) {
        winnerText.innerHTML = "You lost! try again."
        losses += 1
        loss.innerHTML = "Losses: " + losses;
    } else if (playerChoice == 3 && computerChoice == 2) {
        winnerText.innerHTML = "You Won! try again."
        wins += 1
        win.innerHTML = "Wins: " + wins;
    } else {
        winnerText.innerHTML = "Tie! try again"
    }
}

let winnerText = document.querySelector(".winnerText")
let playerText = document.querySelector(".player-text")
let computerText = document.querySelector(".computer-text")
let win = document.querySelector('.wins')
let loss = document.querySelector('.loss')


