const gameDecisions = ["rock", "paper", "scissors"]

function playerPlay() {
    let playerDecision = window.prompt("Rock, Paper, or Scissors: Make your choice!");
    if (gameDecisions.indexOf(playerDecision)===-1) {
        return -1;
    }
    else {
        let playerDecisionFormatted = playerDecision.toLowerCase();
        return playerDecisionFormatted;
    }
}

function computerPlay() {
    let computerDecision = gameDecisions[Math.floor(Math.random() * gameDecisions.length)];
    return computerDecision;
}

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === -1) {
        return "Sorry, that's not a valid choice";
    }
    else if (playerSelection === computerSelection) {
        return "You both chose "+playerSelection+", so it's a draw."
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "The computer chose "+computerSelection+". You lose!";
        }
        else {
            return "The computer chose "+computerSelection+". You win!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "The computer chose "+computerSelection+". You win!";
        }
        else {
            return "The computer chose "+computerSelection+". You lose!";
        }
    }
    else {
        if (computerSelection === "paper") {
            return "The computer chose "+computerSelection+". You win!";
        }
        else {
            return "The computer chose "+computerSelection+". You lose!";
        }
    }
}

console.log(gameRound(playerPlay(), computerPlay()));

