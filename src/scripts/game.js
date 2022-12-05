/** @type {HTMLCanvasElement} */
import CourseMap from './still/course-map.js'
import Player from './moving/player.js';
import ProjectileController from './moving/projectile-controller.js';


// PROOF - MOVE THESE CONSTANTS WHERE THEY BELONG /scripts/game-parameters/pos-and-dim.js
// Pixels
const DIM_X = 1200;
const DIM_Y = 800;
const startPosCushion = 100;

// Gameplay
let playerIdx = 0;
const numPlayers = 2;

// Colors
const playerColors = ['#0d00ff', '#aeff00', 'blue', 'purple'];

// Positions
const startPos = [[startPosCushion,startPosCushion], // top left
                  [DIM_X - startPosCushion,DIM_Y - startPosCushion], // // bottom right
                  [DIM_X - startPosCushion,startPosCushion], // top right
                  [startPosCushion,DIM_Y - startPosCushion], // bottom left
];

// Starting Directions (Angles)
// clockwise ->
const startDir = [0, 180, 90, 270];

// Game Constants
export default class Game {
  constructor (canvas) {
    this.ctx = canvas.getContext('2d');
    this.map = new CourseMap(canvas);
    this.projectileController = new ProjectileController(canvas);
    this.players = Array.from(Array(numPlayers), () => {
      return new Player(playerIdx,
                        startPos[playerIdx], // PROOF - MOVE THIS LOGIC TO THE PLAYERS FILE
                        startDir[playerIdx],
                        playerColors[playerIdx++],
                        this.projectileController);
    });
    // this.obstacles = Array.from(Array(numObstacles), () => new Obstacle());
    // this.perks = Array.from(Array(numPerks), () => new Perk());

    this.draw(this.ctx);
    this.animate();
  }

  update () {
    this.players.forEach((player) => player.update());
    this.projectileController.update();
    this.checkCollisions();
    // proof - may need to iterate through projectiles here
  }

  checkCollisions () {
    this.players.forEach(player => {
      let collisionCount = this.projectileController.collideWith(player);
      
    });
  }


  draw (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    // Draw map -> projectiles -< players (order sensitive)
    this.map.draw(ctx);
    this.projectileController.draw(ctx);
    this.players.forEach(player => player.draw(ctx));
  }

  animate () {
    this.update();
    this.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}
