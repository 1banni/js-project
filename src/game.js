import Player from "./player.js";

const DIM_X = 1200;
const DIM_Y = 800;

const numPlayers = 2;


const colors = ['orange', 'yellow', 'blue', 'purple'];
let colorIdx = 0;
const startPos = [
  [100,100],
  [1100,700],
  [100,700],
  [1100,100],
];
let startPosIdx = 0;




export default class Game {

  constructor (canvas) {
    this.players = Array.from(Array(numPlayers), () => new Player(startPos[startPosIdx++], colors[colorIdx++]));
    // this.obstacles = Array.from(Array(numObstacles), () => new Obstacle());
    // this.perks = Array.from(Array(numPerks), () => new Perk());
    this.ctx = canvas.getContext('2d');
    this.draw(this.ctx);
    this.animate();


  }


  draw(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    ctx.fillStyle = '#339933';
    ctx.fillRect(0, 0, DIM_X, DIM_Y);
    this.players.forEach(player => player.draw(ctx));
  }


  animate () {
    // this.moveObjects();
    this.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

}
