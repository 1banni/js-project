/** @type {HTMLCanvasElement} */
import Player from './moving/player.js';
import EdgeController from './still/edge-controller.js';
import ProjectileController from './moving/projectile-controller.js';
import PerkController from './moving/perk-controller.js';
import { PLAYERS_COLOR, NUM_PLAYERS, PLAYERS_START_POS, PLAYERS_START_DIR } from './game-parameters/player-params.js';
import { DIM_X, DIM_Y } from './game-parameters/map-params.js'


let playerIdx = 0;

// Game Constants
export default class Game {

  constructor (canvas) {
    this.ctx = canvas.getContext('2d');
    this.startTime = null;
    this.time;

    this.edgeController = new EdgeController(this.ctx);
    this.projectileController = new ProjectileController(this.ctx, this.edgeController);
    this.perkController = new PerkController()
    this.players = Array.from(Array(NUM_PLAYERS), () => {
      return new Player(playerIdx,
                        PLAYERS_START_POS[playerIdx], // PROOF - MOVE THIS LOGIC TO THE PLAYERS FILE
                        PLAYERS_START_DIR[playerIdx],
                        PLAYERS_COLOR[playerIdx++],
                        this.edgeController,
                        this.projectileController);
    });
    console.log('this.players', this.players);

    // this.obstacles = Array.from(Array(numObstacles), () => new Obstacle());
    // this.perks = Array.from(Array(numPerks), () => new Perk());

    // this.draw(this.ctx);
    this.animate();
  }



  update () { // Updates Moving Objects
    this.players.forEach((player) => player.update());
    this.projectileController.update();
    this.perkController.update();
  }

  checkIntersections() {
    this.players.forEach(player => this.edgeController.intersects(player)); // Map
    this.projectileController.checkIntersections(); // Projectiles
    // Other Players
    // for (let i = 0; i < this.players.length; i++) {
    //   for (let j = i+1; j < this.players.length; j++) {
    //     // console.log('this.players[i].collideWith(this.players[j])', this.players[i].collideWith(this.players[j]));
          // IF DIST OF THIS IS LESS THAN 2X RADIUS, PLAYERS ARE COLLIDING
          // GET THE VECTOR (SUBTRACT P2 FROM P1), THEN SCALE THAT VECTOR TO BE LENGTH R
          // let p1 = this.players[i];
    //       let p2 = this.players[j];
    //
    //       // PROOF - TBU

    //     }
    //   }
    // }
  }

  checkCollisions () { // Checks each player for collision with projectile.
    // projectile.collideWith method calls damagePlayer()
    this.players.forEach( player => this.projectileController.collideWith(player) );
    this.players.forEach( player => this.perkController.collideWith(player) );
  }

  draw (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.edgeController.drawCanvas(ctx);
    let layer = 0;
    this.edgeController.drawLayer(ctx, layer);
    this.projectileController.drawLayer(ctx, layer);
    this.players.forEach(player => player.drawLayer(ctx, layer));
    this.perkController.draw(ctx);

    // // // Layer 1
    layer = 1;
    this.edgeController.drawLayer(ctx, layer);
    this.projectileController.drawLayer(ctx, layer);
    this.players.forEach(player => player.drawLayer(ctx, layer));

    // Top Layer (perks)

  }
  // draw canvas -> grid, projectiles, players lvl 1, then lvl 2 ->
  // draw map, projectiles, players lvl 1, then lvl 2 ->
  // Draw map -> projectiles -< players (order sensitive)
  // Draw layer 0 :
  // Draw players layer 0
  // Draw map layer 1
  // Draw players layer 1
  // Copy Pacman - tunnels on side of screen
  // // Layer 0



  animate () {
    this.update();
    this.checkIntersections(); // PROOF - UPDATE FOR LAYERS?
    this.checkCollisions(); // PROOF - UPDATE FOR LAYERS?
    this.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}
