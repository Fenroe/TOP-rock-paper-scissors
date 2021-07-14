const gameDecisions = ["rock", "paper", "scissors"]

function playerPlay() {
    let playerDecision = window.prompt("Rock, Paper, or Scissors: Make your choice!");
    playerDecisionFormatted = playerDecision.toLowerCase();
    if (gameDecisions.indexOf(playerDecisionFormatted)===-1) {
        return -1;
    }
    else {
        return playerDecisionFormatted;
    }
}

function computerPlay() {
    let computerDecision = gameDecisions[Math.floor(Math.random() * gameDecisions.length)];
    return computerDecision;
}

function gameRound(playerSelection, computerSelection) {
    const result = "The computer chose "
    const win = ". You win!"
    const lose = ". You lose!"
    if (playerSelection === -1) {
        return "Sorry, that's not a valid choice";
    }
    else if (playerSelection === computerSelection) {
        return "You both chose "+playerSelection+", so it's a draw."
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return result+computerSelection+lose;
        }
        else {
            return result+computerSelection+win;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return result+computerSelection+win;
        }
        else {
            return result+computerSelection+lose;
        }
    }
    else {
        if (computerSelection === "paper") {
            return result+computerSelection+win;
        }
        else {
            return result+computerSelection+lose;
        }
    }
}

window.alert(gameRound(playerPlay(), computerPlay()));

