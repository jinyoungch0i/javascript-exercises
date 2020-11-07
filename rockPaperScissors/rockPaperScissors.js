function computerPlay() {
    move = ["Rock", "Paper", "Scissors"];
    play = move[Math.random() * move.length];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return "You Win! Rock beats Scissors";
    }

    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        return "You Win! Paper beats Rock";
    }

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        return "You Win! Scissors beat Paper";
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
