const gameDecisions = ['rock', 'paper', 'scissors'];

function playerPlay() {
  const playerDecision = window.prompt('Rock, Paper, or Scissors: Make your choice!');
  const playerDecisionFormatted = playerDecision.toLowerCase();
  if (gameDecisions.indexOf(playerDecisionFormatted) === -1) {
    return -1;
  }

  return playerDecisionFormatted;
}

function computerPlay() {
  const computerDecision = gameDecisions[Math.floor(Math.random() * gameDecisions.length)];
  return computerDecision;
}

function gameRound(playerSelection, computerSelection) {
  const result = 'The computer chose ';
  const win = '. You gain a point!';
  const lose = '. Computer gains a point!';
  if (playerSelection === -1) {
    window.alert("Sorry, that's not a valid choice");
    return 0;
  }
  if (playerSelection === computerSelection) {
    window.alert(`You both chose ${playerSelection}, so it's a draw.`);
    return 0;
  }
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      window.alert(result + computerSelection + lose);
      return -1;
    }

    window.alert(result + computerSelection + win);
    return 1;
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      window.alert(result + computerSelection + win);
      return 1;
    }

    window.alert(result + computerSelection + lose);
    return -1;
  }

  if (computerSelection === 'paper') {
    window.alert(result + computerSelection + win);
    return 1;
  }

  window.alert(result + computerSelection + lose);
  return -1;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 5) {
    const roundResult = gameRound(playerPlay(), computerPlay());
    if (roundResult === 1) {
      playerScore += 1;
    } else if (roundResult === -1) {
      computerScore += 1;
      if (computerScore === 5) {
        playerScore += 5;
      }
    } else {
      playerScore += roundResult; // expected that this will not affect the player's score.
    }
  }
  if (computerScore === 5) {
    return 'You lose!';
  }

  return 'You win!';
}

export default game();
