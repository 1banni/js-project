import Game from "./Game.js";

export default class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
  }
}
