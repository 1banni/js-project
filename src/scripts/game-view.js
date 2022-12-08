import Game from "./game.js";

export default class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
  }

  start() {
    console.log('we made itttttt');
  }
}
// PROOF - consider adding below methods to the constructor later
// this.dimensions = {width: canvas.width, height: canvas.height};
// this.registerEvents();
// this.restart();
// this.game = new Game();
