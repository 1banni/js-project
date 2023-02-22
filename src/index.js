import GameView from './scripts/GameView.js';
// import KeyHandler from './scripts/key-handler.js'
import KeyHandler from './scripts/KeyHandler.js';
import Game from "./scripts/Game.js";

document.addEventListener("DOMContentLoaded", () => {
  const startGameButton = document.getElementById('start-game');
  const restartGameButton = document.getElementById('restart-game');
  const instructionsButton = document.getElementById('instructions-btn');
  startGameButton.addEventListener('click', startGame);
  restartGameButton.addEventListener('click', startGame);
  instructionsButton.addEventListener('click', showInstructions);

  function startGame() {
    const gameWindow = document.getElementById('game-window');
    gameWindow.classList.remove("hidden");
    const mainMenu = document.getElementById('main-menu');
    mainMenu.classList.add("hidden");

    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d");
    let CANVAS_WIDTH = canvas.width = 1200;
    let CANVAS_HEIGHT = canvas.height = 800;
    let gameView = new GameView(ctx);
    const menu = document.getElementById('menu');
  }

  function showInstructions() {
    console.log('showing em');
    const instructions = document.getElementById('instructions');
    console.log('instructions.classList');
    if (Array.from(instructions.classList).includes('hidden')) {
      instructions.classList.remove("hidden")

    } else {
      instructions.classList.add("hidden")

    }
  }
});