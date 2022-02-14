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
    const win = ". You gain a point!"
    const lose = ". Computer gains a point!"
    if (playerSelection === -1) {
        window.alert("Sorry, that's not a valid choice");
        return 0;
    }
    else if (playerSelection === computerSelection) {
        window.alert("You both chose "+playerSelection+", so it's a draw.");
        return 0;
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            window.alert(result+computerSelection+lose);
            return -1;
        }
        else {
            window.alert(result+computerSelection+win);
            return 1;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            window.alert(result+computerSelection+win);
            return 1;
        }
        else {
            window.alert(result+computerSelection+lose);
            return -1;
        }
    }
    else {
        if (computerSelection === "paper") {
            window.alert(result+computerSelection+win);
            return 1;
        }
        else {
            window.alert(result+computerSelection+lose);
            return -1;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5) {
        let roundResult = gameRound(playerPlay(), computerPlay())
        if (roundResult === 1) {
            playerScore++;
        }
        else if (roundResult === -1) {
            computerScore++;
            if (computerScore === 5) {
                playerScore+=5;
            }
        }
        else {
            playerScore+=roundResult; //expected that this will not affect the player's score.
        }
    }
    if (computerScore === 5) {
        return "You lose!";
    }
    else {
        return "You win!";
    }
}

export default game();
