class Game {
  #winnerDecided;

  #validChoices;

  constructor() {
    this.#winnerDecided = false;
    this.#validChoices = ['rock', 'paper', 'scissors'];
  }

  get winnerDecided() {
    return this.#winnerDecided;
  }

  declareWinner() {
    this.#winnerDecided = true;
  }

  get validChoices() {
    return this.#validChoices;
  }

  round(playerChoice, computerChoice) {
    const playerChoiceIndex = this.#validChoices.indexOf(playerChoice);
    let computerChoiceIndex = Math.floor(Math.random() * this.#validChoices.length);
    if (computerChoice) {
      computerChoiceIndex = this.#validChoices.indexOf(computerChoice);
    }
    let result = '';
    if (playerChoiceIndex === computerChoiceIndex) {
      result = 'draw';
    } else if (playerChoiceIndex === computerChoiceIndex - 1
        || playerChoiceIndex === computerChoiceIndex + 2) {
      result = 'lose';
    } else if (playerChoiceIndex === computerChoiceIndex + 1
    || playerChoiceIndex === computerChoiceIndex - 2) {
      result = 'win';
    } else {
      result = 'Unable to declare a result';
    }
    return result;
  }
}

export default Game;
