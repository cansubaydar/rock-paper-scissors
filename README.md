## The Odin Project 

### The project: Rock Paper Scissors 

The purpose of this project is to build a classic rock paper scissors game from scratch. This game is going to be played completely from the browser console. 

#### Rules of the Game

- :hand: beats :fist:
- :v: beats :hand:
- :fist: beats :v:

#### Building Rock Paper Scissors in JavaScript:

1. Created a function called `computerPlay` that randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ because the game is going to play against the computer. 
2. Created a function that plays a single round of Rock Paper Scissors with two parameters - the `playerSelection` and `computerSelection`. 
3. Created a function called `gameWinner` that keeps score and reports a winner or loser of the round. 
4. Created a new function called `game`. Used the `playRound`, `computerPlay`, `gameWinner` functions inside of this function. And declared the playerSelection variable that uses `prompt` to get input from the user and made it case-insensitive.   
5. Created a function called `finalWinner` to display the winner at the end of the game.
6. Created a function called `startGame` and used a `for` loop to play the game for 5 rounds. And called the `game` and `finalWinner` functions inside of this function.  