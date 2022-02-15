class Player {
  #name;

  #score;

  constructor() {
    this.#name = '';
    this.#score = 0;
  }

  get name() {
    return this.#name;
  }

  set name(playerName) {
    this.#name = playerName;
  }

  get score() {
    return this.#score;
  }

  increaseScore() {
    this.#score += 1;
  }
}

export default Player;
