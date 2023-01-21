let playerChoice = 0;
let computerChoice = 0;
let game = 0;

function getComputerChoice(min, max) {
    computerChoice = Math.floor(Math.random() * (max -min + 1) + min)
    return computerChoice
    
}


function getPlayerChoice() {
       playerChoice = prompt("Please enter a move");
      if (playerChoice.toLowerCase() == "rock") {
      return playerChoice = 1 
      } else if (playerChoice.toLowerCase() == "paper") {
        return playerChoice = 2
      } else if (playerChoice.toLowerCase() == "scissor"){
        return playerChoice = 3
      } else {
        prompt("Please enter a valid move.")
      } 
      

} 

function rpsGame(playerSelection, computerSelection) {
    if(playerChoice === 1 && computerChoice === 1) {
        console.log("Tie! try again.")
    }  else if (playerChoice == 1 && computerChoice == 2) {
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

function stupidGame() {
    for (let i = 0; i < 5; i++) {
    if(i != 0) {
        console.log('test')
    }
}
    }


  
stupidGame();
getPlayerChoice();
getComputerChoice(1, 3);
 console.log("playerChoice = " + playerChoice)
 console.log("computerChoice = " + computerChoice)