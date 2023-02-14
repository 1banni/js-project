import GameView from './scripts/game-view.js';
import KeyHandler from './scripts/key-handler.js'
import Game from "./scripts/game.js";

// window.onload = function() {
  document.addEventListener("DOMContentLoaded", () => {
    const startGameButton = document.getElementById('start-game');
    const restartGameButton = document.getElementById('restart-game');
    startGameButton.addEventListener('click', startGame);
    restartGameButton.addEventListener('click', startGame);

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
  });
// }