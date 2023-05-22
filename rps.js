function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return ("You Win! Rock Beats Scissors");
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        return ("You Win! Paper Beats Rock");
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return ("You Win! Scissors Beats Paper");
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
        return ("You Lose! Paper Beats Rock");
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        return ("You Lose! Scissors Beats Paper");
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return ("You Lose! Rock Beats Scissors");
    } else {
        return (`You Tied! ${playerSelection} doesn't beat ${computerSelection}`);
    }
}
const container = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice();
        container.textContent = playRound(playerSelection, computerSelection);
    });
});