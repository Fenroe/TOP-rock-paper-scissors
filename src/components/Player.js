class Player {
  #score;

  constructor() {
    this.#score = 0;
  }

  get score() {
    return this.#score;
  }

  increaseScore() {
    this.#score += 1;
  }
}

export default Player;
