class UI {
  #content;

  #header;

  #main;

  #footer;

  #gameBoard;

  constructor() {
    this.#content = document.querySelector('#content');
    this.#header = document.createElement('header');
    this.#main = document.createElement('main');
    this.#footer = document.createElement('footer');
    this.#gameBoard = document.createElement('section');
  }

  renderHeader() {
    this.#header.classList.add('header');
    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('page-title');
    pageTitle.textContent = 'Rock, Paper, Scissors.js';
    this.#header.append(pageTitle);
    this.#content.append(this.#header);
  }

  renderMain() {
    this.#main.classList.add('main');
    this.#gameBoard.classList.add('game-board');
    this.#main.append(this.#gameBoard);
    this.#content.append(this.#main);
  }

  renderFooter() {
    this.#footer.classList.add('footer');
    this.#content.append(this.#footer);
  }

  renderPreGameBoard(callback) {
    this.#gameBoard.innerHTML = '';
    const enterNameLabel = document.createElement('label');
    enterNameLabel.classList.add('enter-name-label');
    enterNameLabel.textContent = 'Enter Your Name';
    const enterNameInput = document.createElement('input');
    enterNameInput.classList.add('enter-name-input');
    const startGameButton = document.createElement('button');
    startGameButton.classList.add('start-game-button');
    startGameButton.textContent = 'Start Game';
    this.#gameBoard.append(enterNameLabel);
    this.#gameBoard.append(enterNameInput);
    this.#gameBoard.append(startGameButton);
    startGameButton.addEventListener('click', () => {
      const enterNameValue = document.querySelector('.enter-name-input').value;
      callback(enterNameValue);
    });
  }

  renderPage(callback) {
    this.renderHeader();
    this.renderMain();
    this.renderFooter();
    this.renderPreGameBoard(callback);
  }

  renderDecisionScreen(callback) {
    this.#gameBoard.innerHTML = '';
    const decisionScreenHeading = document.createElement('h1');
    decisionScreenHeading.classList.add('decision-screen-heading');
    const rockButton = document.createElement('button');
    rockButton.classList.add('.rock-button');
    rockButton.dataset.key = 'rock';
    rockButton.textContent = 'Rock';
    const paperButton = document.createElement('button');
    paperButton.classList.add('.paper-button');
    paperButton.dataset.key = 'paper';
    paperButton.textContent = 'Paper';
    const scissorsButton = document.createElement('button');
    scissorsButton.classList.add('.scissors-button');
    scissorsButton.dataset.key = 'scissors';
    scissorsButton.textContent = 'Scissors';
    this.#gameBoard.append(decisionScreenHeading);
    this.#gameBoard.append(rockButton);
    this.#gameBoard.append(paperButton);
    this.#gameBoard.append(scissorsButton);
    const decisionButtons = this.#gameBoard.querySelectorAll('button');
    decisionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        callback(button.dataset.key);
      });
    });
  }

  renderGameOverScreen(result) {
    this.#gameBoard.innerHTML = '';
    const gameOverText = document.createElement('h1');
    gameOverText.classList.add('game-over-text');
    gameOverText.textContent = result;
    this.#gameBoard.append(gameOverText);
  }
}

export default UI;
