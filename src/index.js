import GameView from './scripts/game-view.js';
import KeyHandler from './scripts/key-handler.js'
import Game from "./scripts/game.js";

// window.onload = function() {
  document.addEventListener("DOMContentLoaded", () => {
    const startGameButton = document.getElementById('start-game');
    const restartGameButton = document.getElementById('restart-game');
    startGameButton.addEventListener('click', startGame);
    restartGameButton.addEventListener('click', startGame);

    // const link = document.querySelector("link[rel~='icon']");
    // if (!link) {
    //   link = document.createElement('link');
    //   link.rel = 'icon';
    //   document.head.appendChild(link);
    // }
    // link.href = 'https://stackoverflow.com/favicon.ico';
    // function setFavicons(favImg){
    //   let headTitle = document.querySelector('head');
    //   let setFavicon = document.createElement('link');
    //   setFavicon.setAttribute('rel','shortcut icon');
    //   setFavicon.setAttribute('href',favImg);
    //   headTitle.appendChild(setFavicon);
    // }
    // setFavicons('https://spemer.com/img/favicon/favicon.png');

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