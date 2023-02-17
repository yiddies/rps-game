let computerChoice = '';
let playerChoice = '';

const buttons = document.querySelectorAll('button');

buttons.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        if (buttons.id === 'paper' || buttons.id === 'scissors' || buttons.id === 'rock') {
            console.log('player button')
        } else {
            console.log("computer button")
        }
        rpsGame();
    });
});

function rpsGame() {

}