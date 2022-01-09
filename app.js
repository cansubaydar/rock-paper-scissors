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
const gameStartBtn = document.querySelector('.game_start button');
const main = document.querySelector('main');

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
    finalWinner();
}

// announce game winner
const resultPanel = document.querySelector('.result_panel');
const restartBtn = document.querySelector('.result_panel button');
const scoreSpan = document.querySelector('.result_panel p .score_span');
const resultSpan = document.querySelector('.result_panel p .result_span');
const scoreReset = document.querySelector('.score_panel');

function finalWinner() {
        for(let i = 0; i < 5; i++) {
        if (computerScore < 5 && playerScore < 5) {
            continue;
        }
        if(computerScore === 5 || playerScore === 5) {
            resultPanel.style.display = 'inline-flex';
            scoreSpan.textContent += `${playerScore} - ${computerScore}`;
            if(playerScore > computerScore) {
                resultSpan.textContent += ` You Won, Congratulations! 🚀 `;
            } else {
                resultSpan.textContent += ` You Lost, Try again! 💫 `;
            }
            break;
        }
    }
}

// restart button  
restartBtn.addEventListener('click', () => {
    resultPanel.style.display = 'none'; 
    resultSpan.textContent = ""; // clear the result panel text
    scoreSpan.textContent = ""; // clear the result panel score
    playerScore = 0; // start the score 
    computerScore = 0; // start the score 
    playerScore_span.textContent = '0'; // reset the score
    computerScore_span.textContent = '0'; // reset the score 
    gameResult.textContent = ""; // clear the result text
    selectionPanel.style.display = 'none'; // clear the choosen move
})

// start the game button
gameStartBtn.addEventListener('click', () => {
    main.style.display = 'block';
    gameStartBtn.parentElement.style.display = 'none';
})