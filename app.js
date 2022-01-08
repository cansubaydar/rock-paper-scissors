let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.querySelector('.player_score');
const computerScore_span = document.querySelector('.computer_score');
const gameResult = document.querySelector('.game_result p');
const choicesComputer = document.querySelector('.choices_computer');
const choicesPlayer = document.querySelector('.choices_player');
const selectionPanel = document.querySelector('.selection_panel');
const buttons = document.querySelectorAll('.selections button i');
const randomButtons = ['rock', 'paper', 'scissors'];

// button event listener 
buttons.forEach(button => button.addEventListener('click', game));

// game running
function game(e) {
    const playerSelection = e.target.parentElement.getAttribute('data-selection');
    const computerSelection = computerPlay();
    const roundWinner = playRound(playerSelection, computerSelection);

    gameWinner(roundWinner, computerSelection, playerSelection);
}

// computer choice
function computerPlay() {
    const computerSelection = Math.floor(Math.random()* randomButtons.length);
    return randomButtons[computerSelection];
}

// game round
function playRound(player, computer) {
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')) 
    { 
        return 'player';
    } else if (player === computer) {
        return 'draw';
    } else { 
        return 'computer';
    }
}

// keep scores of game winner
function gameWinner(roundWinner, computerSelection, playerSelection) {
    const iconC = `<i class="fas fa-hand-${computerSelection}"></i>`;
    const iconP = `<i class="fas fa-hand-${playerSelection}"></i>`;
    const playerUpper = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    const computerUpper = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();
    const winner = `You won! ${playerUpper} beats ${computerUpper}`;
    const loser = `You lose! ${computerUpper} beats ${playerUpper}`;
    const draw = `It's a Draw!`;

    if(roundWinner === 'player') {
        playerScore++;
        gameResult.textContent = winner;
        choicesPlayer.innerHTML = iconP;
        choicesComputer.innerHTML = iconC;
        playerScore_span.textContent = `${playerScore}`;
    } else if (roundWinner === 'computer') {
        computerScore++;
        gameResult.textContent = loser;
        choicesPlayer.innerHTML = iconP;
        choicesComputer.innerHTML = iconC;
        computerScore_span.textContent = `${computerScore}`;
    } else {
        gameResult.textContent = draw;
        choicesPlayer.innerHTML = iconP;
        choicesComputer.innerHTML = iconC;
    }
    selectionPanel.style.display = 'inline-flex';
}