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

  initHeader() {
    this.#header.classList.add('header');
    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('page-title');
    pageTitle.textContent = 'Rock, Paper, Scissors.js';
    this.#header.append(pageTitle);
    this.#content.append(this.#header);
  }

  initMain() {
    this.#main.classList.add('main');
    this.#gameBoard.classList.add('game-board');
    this.#main.append(this.#gameBoard);
    this.#content.append(this.#main);
  }

  renderPreGameBoard() {
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
  }

  initStartGameButton(callback) {
    const button = this.#gameBoard.querySelector('.start-game-button');
    button.addEventListener('click', () => {
      const enterNameValue = document.querySelector('.enter-name-input').value;
      callback(enterNameValue);
    });
  }

  renderDecisionScreen() {
    this.#gameBoard.innerHTML = '';
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
    this.#gameBoard.append(rockButton);
    this.#gameBoard.append(paperButton);
    this.#gameBoard.append(scissorsButton);
  }

  initDecisionButtons(callback) {
    const decisionButtons = this.#gameBoard.querySelectorAll('button');
    decisionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        callback(button.dataset.key);
      });
    });
  }

  renderResultsScreen(result) {
    this.#gameBoard.innerHTML = '';
    const resultHeading = document.createElement('h1');
    resultHeading.classList.add('result-heading');
    resultHeading.textContent = result;
    const continueButton = document.createElement('button');
    continueButton.classList.add('continue-button');
    continueButton.textContent = 'Continue';
    this.#gameBoard.append(resultHeading);
    this.#gameBoard.append(continueButton);
  }

  initContinueButton(callback) {
    const continueButton = this.#gameBoard.querySelector('.continue-button');
    continueButton.addEventListener('click', () => {
      callback();
    });
  }

  renderGameOverScreen(result) {
    this.#gameBoard.innerHTML = '';
    const gameOverText = document.createElement('h1');
    gameOverText.classList.add('game-over-text');
    gameOverText.textContent = result;
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('play-again-button');
    playAgainButton.textContent = 'Play Again';
    this.#gameBoard.append(gameOverText);
    this.#gameBoard.append(playAgainButton);
  }

  initPlayAgainButton(callback) {
    const playAgainButton = this.#gameBoard.querySelector('.play-again-button');
    playAgainButton.addEventListener('click', () => {
      callback();
    });
  }

  initFooter() {
    this.#footer.classList.add('footer');
    this.#content.append(this.#footer);
  }

  renderPage() {
    this.initHeader();
    this.initMain();
    this.initFooter();
    this.renderPreGameBoard();
  }
}

export default UI;
