/** @type {HTMLCanvasElement} */
import Player from './moving/player.js';
import EdgeController from './still/EdgeController.js';
import ProjectileController from './moving/ProjectileController.js';
import PerkController from './moving/PerkController.js';
import { MAP, PLAYER, PERK } from "./GameParams";



// Game Constants
export default class Game {

  constructor (ctx) {
    this.ctx = ctx;
    this.playerIdx = 0;

    // Time
    this.lastTime = null;
    this.time;

    // Rounds
    this.startNextRound = true;
    this.round = 0;
    this.rounds = Object.keys(PERK.ROUNDS).length;
    this.roundHopper = 0; // proof

    // Other classes
    this.edgeController = new EdgeController(this.ctx);
    this.projectileController = new ProjectileController(this.ctx, this.edgeController);
    this.perkController;
    this.players = Array.from(Array(PLAYER.NUMBER), () => {
      return new Player(this.playerIdx,
        PLAYER.STARTING_POS[this.playerIdx], // PROOF - MOVE THIS LOGIC TO THE PLAYER FILE
        PLAYER.STARTING_DIR[this.playerIdx],
        PLAYER.COLORS[this.playerIdx++],
        this.edgeController,
        this.projectileController);
      });

    // Kickstart
    this.updateRound();
    this.draw(this.ctx);
    this.animate();
  }

  updateRound () {
    if (this.startNextRound) {
      this.startNextRound = false;
      // Repeat last round once all roudns are complete
      let isLast = !(this.round < this.rounds);
      let pointer = Math.min(this.round, this.rounds);
      this.perkController = new PerkController(PERK.ROUNDS[pointer - isLast]);
    }

    this.time = new Date().getTime();
    if (!this.startTime) this.startTime = this.time;
    let timePassed = this.time - this.startTime;
    if (timePassed > 1000 * PERK.ROUND_LENGTH) {
      this.round++;
      this.startNextRound = true;
      this.startTime = this.time;
    }
  }

  endGame (survivingPlayers) {
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'white';
    this.ctx.font = '48px arial';
    this.ctx.clearRect(0, 0, MAP.DIM_X, MAP.DIM_Y);
    this.ctx.fillText(`Game Over.  Player ${survivingPlayers[0].idx + 1} wins`, MAP.DIM_X * 0.4, MAP.DIM_Y * 0.45);
  }

  update () { // Updates Moving Objects
    if (this.roundHopper++ % 200 === 0) {
      this.roundHopper = 1;
      this.updateRound();
    }
    this.players.forEach((player) => player.update());
    this.projectileController.update();
    this.perkController.update();
  }

  checkIntersections() {
    this.players.forEach(player => this.edgeController.intersects(player)); // Map
    this.projectileController.checkIntersections(); // Projectiles
  }

  checkCollisions () { // Checks each player for collision with projectile.
    this.players.forEach( player => this.projectileController.collideWith(player) );
    this.players.forEach( player => this.perkController.collideWith(player) );
  }

  draw (ctx) {
    ctx.clearRect(0, 0, MAP.DIM_X, MAP.DIM_Y);
    this.edgeController.drawCanvas(ctx);

    let layer = 0;
    this.edgeController.drawLayer(ctx, layer);
    this.projectileController.drawLayer(ctx, layer);
    this.players.forEach(player => player.drawLayer(ctx, layer));
    this.perkController.draw(ctx);

    layer = 1;
    this.edgeController.drawLayer(ctx, layer);
    this.projectileController.drawLayer(ctx, layer);
    this.players.forEach(player => player.drawLayer(ctx, layer));
  }

  animate () {
    this.checkIntersections();
    this.checkCollisions(); 
    this.draw(this.ctx);
    this.update();
    if (!this.players.every(player => player.isAlive())) {
      console.log('ending game');
      return this.endGame(this.players.filter(player => player.isAlive()));
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  hangingIndex(arr, i) {
    let isLast = !(i < arr.length);
    let pointer = Math.min(i, arr.length)
    return arr[pointer - isLast]
  }
}
