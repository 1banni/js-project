import Game from "./game.js";

export default class GameView {
  constructor (canvas) {
    this.ctx = canvas.getContext("2d");
    this.game = new Game(canvas);

    // this.dimensions = {width: canvas.width, height: canvas.height};
    // this.registerEvents();
    // this.restart();
    // this.game = new Game();
  }
}


