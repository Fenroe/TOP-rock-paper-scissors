import Player from '../Player/Player';
import Game from '../Game/Game';
import UI from '../UI/UI';

function App() {
  const user = new Player();
  const opponent = new Player();
  const gameLogic = new Game();
  const uiController = new UI();

  function initPlayers() {
    user.resetScore();
    opponent.resetScore();
  }

  function userWins() {
    if (user.score >= 5) {
      return true;
    }
    return false;
  }

  function opponentWins() {
    if (opponent.score >= 5) {
      return true;
    }
    return false;
  }

  function playRound(decision) {
    let result = 'It was a tie! Nobody gains a point';
    if (gameLogic.round(decision) === 'win') {
      user.increaseScore();
      result = 'You won! You gain a point';
    }
    if (gameLogic.round(decision) === 'lose') {
      opponent.increaseScore();
      result = 'You lost! Your opponent gains a point';
    }
    if (userWins()) {
      uiController.renderGameOverScreen('Congratulations, you won!');
      return;
    }
    if (opponentWins()) {
      uiController.renderGameOverScreen('You lost. Better luck next time!');
      return;
    }
    document.querySelector('.decision-screen-heading').textContent = result;
  }

  function startGame() {
    initPlayers();
    uiController.renderDecisionScreen(playRound);
  }

  function renderPage() {
    uiController.renderPage(startGame);
  }

  return {
    renderPage,
  };
}

export default App;
