let rpsValue = 0

function getRandomInt(min, max) {
    rpsValue = Math.floor(Math.random() * (max -min + 1) + min)
    return rpsValue
}

function getComputerChoice() {
    if(rpsValue == 1) {
        return("Rock");
    } else if(rpsValue == 2) {
        return("Paper");
    } else {
        return("Scissor");
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Please enter a move");

}

function rpsGame(playerSelection, computerSelection) {
}

getPlayerChoice();
rpsGame(getPlayerChoice, getComputerChoice);
getRandomInt(1, 3);
getComputerChoice();
 console.log(getPlayerChoice)