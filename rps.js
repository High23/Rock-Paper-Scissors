function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return ("Tied!");
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper' || playerSelection == 'Paper' && computerSelection == 'Scissors' 
    || playerSelection == 'Scissors' && computerSelection == 'Rock'){
        computerWins += 1;
        if (computerWins === 5){
            computerWins = 0;
            playerWins = 0;
            return "You Lost! The computer won 5 points before you did. :(";
        }
        return (`You Lose! ${playerSelection} doesn't beat ${computerSelection}`)
    } else {
        playerWins += 1;
        if (playerWins === 5){
            computerWins = 0;
            playerWins = 0;
            return "You Win! You won 5 points before the computer";
        } 
        return (`You Win! ${playerSelection} Beats ${computerSelection}`);
    }
}
let playerWins = 0;
let computerWins = 0;
const results = document.querySelector('#results');
const scoreboard = document.querySelector('#scoreboard');
const playerScore = document.createElement('span');
const computerScore = document.createElement('span');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice();
        results.textContent = playRound(playerSelection, computerSelection);
        playerScore.textContent = `Player score: ${playerWins} `;
        computerScore.textContent = `Computer score: ${computerWins}`;
    });
});

scoreboard.appendChild(playerScore);
scoreboard.appendChild(computerScore);