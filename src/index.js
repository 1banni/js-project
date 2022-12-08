import GameView from "./scripts/game-view.js";
import Game from "./scripts/game.js";

function startGame() {
  document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d");
    let CANVAS_WIDTH = canvas.width = 1200;
    let CANVAS_HEIGHT = canvas.height = 800;
    let gameView = new GameView(ctx);



    const menu = document.getElementById('menu');
    console.log('starting');
  });
}

console.log('window', window);

