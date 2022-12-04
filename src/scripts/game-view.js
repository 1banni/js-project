import Game from "./game.js";

export default class GameView {
  constructor (canvas, game) {
    this.ctx = canvas.getContext("2d");
    this.game = game;

    // this.dimensions = {width: canvas.width, height: canvas.height};
    // this.registerEvents();
    // this.restart();
    // this.game = new Game();
  }
}


// module.expoerts = GameView;
