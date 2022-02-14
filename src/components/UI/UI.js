class UI {
  #content;

  constructor() {
    this.#content = document.querySelector('#content');
  }

  makeHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('page-title');
    pageTitle.textContent = 'Rock, Paper, Scissors.js';
    header.append(pageTitle);
    this.#content.append(header);
  }

  makeMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    const gameBoard = document.createElement('section');
    gameBoard.classList.add('game-board');
    main.append(gameBoard);
    this.#content.append(main);
  }

  makePreGameBoard() {
    const enterNameLabel = document.createElement('label');
    enterNameLabel.classList.add('enter-name-label');
    enterNameLabel.textContent = 'Enter Your Name';
    const enterNameInput = document.createElement('input');
    enterNameInput.classList.add('enter-name-input');
    const startGameButton = document.createElement('button');
    startGameButton.classList.add('start-game-button');
    startGameButton.textContent = 'Start Game';
    const gameBoard = document.querySelector('.game-board');
    gameBoard.append(enterNameLabel);
    gameBoard.append(enterNameInput);
    gameBoard.append(startGameButton);
  }

  makeFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    this.#content.append(footer);
  }

  renderPage() {
    this.makeHeader();
    this.makeMain();
    this.makeFooter();
    this.makePreGameBoard();
  }
}

export default UI;
