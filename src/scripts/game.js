/** @type {HTMLCanvasElement} */
import CourseMap from './still/course-map.js'
import Player from './moving/player.js';
import ProjectileController from './moving/projectile-controller.js';
import EdgeController from './still/map-objects/edge-controller.js';
import { PLAYERS_COLOR, NUM_PLAYERS, PLAYERS_START_POS, PLAYERS_START_DIR } from './game-parameters/player-params.js';
import { DIM_X, DIM_Y } from './game-parameters/map-params.js'
import { Util } from './still/util.js';

let playerIdx = 0;

// Game Constants
export default class Game {
  constructor (canvas) {
    this.ctx = canvas.getContext('2d');
    this.map = new CourseMap(this.ctx);
    this.edgeController = new EdgeController(this.ctx);
    this.projectileController = new ProjectileController(this.ctx, this.edgeController);
    // console.log('PLAYERS_START_POS', PLAYERS_START_POS);
    this.players = Array.from(Array(NUM_PLAYERS), () => {
      // console.log('playerIdx', playerIdx);
      return new Player(playerIdx,
                        PLAYERS_START_POS[playerIdx], // PROOF - MOVE THIS LOGIC TO THE PLAYERS FILE
                        PLAYERS_START_DIR[playerIdx],
                        PLAYERS_COLOR[playerIdx++],
                        this.projectileController);
    });

    console.log('this.players', this.players);

    // this.obstacles = Array.from(Array(numObstacles), () => new Obstacle());
    // this.perks = Array.from(Array(numPerks), () => new Perk());

    this.draw(this.ctx);
    this.animate();
  }

  update () { // Updates Moving Objects
    this.players.forEach((player) => player.update());
    this.projectileController.update();
  }

  checkIntersections() {
    this.projectileController.checkIntersections();
    // this.players.forEach(player => this.edgeController.intersects(player));
  }

  checkCollisions () { // Checks each player for collision with projectile.
    // projectile.collideWith method calls damagePlayer()
    this.players.forEach( player => this.projectileController.collideWith(player) );
  }

  draw (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    // Draw map -> projectiles -< players (order sensitive)
    // Draw layer 0 :
    // Draw players layer 0
    // Draw map layer 1
    // Draw players layer 1
    // Copy Pacman - tunnels on side of screen
    this.map.draw(ctx);


    // Layer 0
    let layer = 0;
    this.edgeController.drawLayer(ctx, layer);
    this.projectileController.drawLayer(ctx, layer);
    this.players.forEach(player => player.drawLayer(ctx, layer));

    // Layer 1
    layer = 1;
    this.edgeController.drawLayer(ctx, layer);
    this.projectileController.drawLayer(ctx, layer);
    this.players.forEach(player => player.drawLayer(ctx, layer));
  }

  animate () {
    this.update();
    this.checkIntersections(); // PROOF - UPDATE FOR LAYERS?
    this.checkCollisions(); // PROOF - UPDATE FOR LAYERS?
    this.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}
