/** @type {HTMLCanvasElement} */
import Player from "./player.js";
import CourseMap from "./course-map.js";


// Pixel Sizing
const DIM_X = 1200;
const DIM_Y = 800;
const startPosCushion = 100;

// Initial Object/ComponentPositions
const startPos = [[startPosCushion,startPosCushion],
                  [DIM_X - startPosCushion,DIM_Y - startPosCushion],
                  [DIM_X - startPosCushion,startPosCushion],
                  [startPosCushion,DIM_Y - startPosCushion],
];
let startPosIdx = 0;

// Coloring
const playerColors = ['orange', 'yellow', 'blue', 'purple'];
let colorIdx = 0;

// Gameplay
const numPlayers = 2;






export default class Game {

  constructor (canvas) {
    this.ctx = canvas.getContext('2d');
    this.map = new CourseMap(canvas);
    this.players = Array.from(Array(numPlayers), () => new Player(startPos[startPosIdx++], playerColors[colorIdx++]));
    // this.obstacles = Array.from(Array(numObstacles), () => new Obstacle());
    // this.perks = Array.from(Array(numPerks), () => new Perk());
    this.draw(this.ctx);
    this.animate();
  }


  draw(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    // Color Canvas
    ctx.fillStyle = '#339933';
    ctx.fillRect(0, 0, DIM_X, DIM_Y);

    this.map.draw(ctx); // Draw Course Map

    this.players.forEach(player => player.draw(ctx));// Draw Players
  }


  animate () {
    // this.moveObjects();
    this.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

}
