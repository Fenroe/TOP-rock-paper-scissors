import Player from '../Player/Player';
import Game from '../Game/Game';
import UI from '../UI/UI';

class App {
  #gameActive;

  #playerName;

  constructor() {
    this.#gameActive = false;
    this.#playerName = '';
  }

  get gameActive() {
    return this.#gameActive;
  }

  startGame() {
    this.#gameActive = true;
  }

  endGame() {
    this.#gameActive = false;
  }

  get playerName() {
    return this.#playerName;
  }
}

export default App;
