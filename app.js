let playerScore = 0;
let computerScore = 0;

// computer choice
const randomChoices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let computerSelection = Math.floor(Math.random()* randomChoices.length);
    return randomChoices[computerSelection];
}

//play round
function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'paper' ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')) {
          return 'playerSelection';
    } else if (playerSelection === computerSelection) {
        return 'draw';
    } else { 
        return 'computerSelection';
    }
}

// keep scores of game winner
function gameWinner(roundWinner, computerSelection, playerSelection) {
    if(roundWinner === 'playerSelection') {
        playerScore++;
        console.log("You won! " + playerSelection + " beats " + computerSelection);
    } else if (roundWinner === 'computerSelection') {
        computerScore++;
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
    } else {
        console.log("It's a Draw!");
    }
}

// game running
function game() {
    let playerSelection = prompt("Do you choose rock, paper or scissors?", "rock").toLowerCase();
    let computerSelection = computerPlay();
    let roundWinner = playRound(playerSelection, computerSelection);

    gameWinner(roundWinner, computerSelection, playerSelection);
}

// announce game winner
function finalWinner() {
    if(playerScore > computerScore) {
        console.log("You Won, Congratulations! " + playerScore + "-" + computerScore);
    } else if(computerScore === playerScore) {
        console.log("It's a draw " + playerScore + "-" + computerScore);
    } else {
        console.log("You Lost, Try again! " + playerScore + "-" + computerScore);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        startGame();
    }, 500);
});

function startGame () {
    for(let i = 0; i < 5; i++) { 
        game();
    };
    finalWinner();
}