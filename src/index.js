import Game from "./scripts/game.js";
import GameView from "./scripts/game-view.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game-canvas');
  let CANVAS_WIDTH = canvas.width = 1200;
  let CANVAS_HEIGHT = canvas.height = 800;

  const menu = document.getElementById('menu');


  let game = new Game(canvas);
  let gameView = new GameView(canvas, game);
  // Disable default browser response to all keys
  // PROOF - UPDATE TO ONLY DISABLE CERTAIN KEYS (USER SHOULD BE ABLE TO CTRL TAB)
  // document.onkeydown = KD;
  // function KD(e) {
  //   if (e.key === ' ' || e.key === ArrowLeft || e.key === ArrowRight ||
  //       e.key === ArrowDown || e.key === ArrowUp)
  //   {
  //       e.returnValue = false;
  //   }

  // }


});
