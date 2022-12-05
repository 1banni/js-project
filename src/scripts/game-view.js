export default class GameView {
  constructor (canvas, game) {
    this.ctx = canvas.getContext("2d");
    this.game = game;
  }
}
// PROOF - consider adding below methods to the constructor later
// this.dimensions = {width: canvas.width, height: canvas.height};
// this.registerEvents();
// this.restart();
// this.game = new Game();
