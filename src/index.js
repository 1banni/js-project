import GameView from './scripts/game-view.js';
import KeyHandler from './scripts/key-handler.js'
import Game from "./scripts/game.js";

// window.onload = function() {
  document.addEventListener("DOMContentLoaded", () => {
    const startGameButton = document.getElementById('start-game');
    startGameButton.addEventListener('click', startGame);


    function startGame() {
      const gameWindow = document.getElementById('game-window');
      gameWindow.classList.remove("hidden");
      const mainMenu = document.getElementById('main-menu');
      mainMenu.classList.add("hidden");
      // canvas.removeAttribute("style");


      console.log('starting');

      const canvas = document.getElementById('game-canvas');
      const ctx = canvas.getContext("2d");
      let CANVAS_WIDTH = canvas.width = 1200;
      let CANVAS_HEIGHT = canvas.height = 800;
      let gameView = new GameView(ctx);
      // instantiate key handler and add event listeners for keyboard actions



        const menu = document.getElementById('menu');
    }

    console.log('window', window);

  });
// }