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
const playerColors = ['#0d00ff', '#aeff00', 'blue', 'purple'];
let colorIdx = 0;

// Gameplay
const numPlayers = 2;

export default class Game {

  constructor (canvas) {
    this.ctx = canvas.getContext('2d');
    this.map = new CourseMap(canvas);
    this.players = Array.from(Array(numPlayers), () => {
      // console.log('startPos',startPos[startPosIdx])
      return new Player(startPos[startPosIdx++], playerColors[colorIdx++])
    });
    // this.obstacles = Array.from(Array(numObstacles), () => new Obstacle());
    // this.perks = Array.from(Array(numPerks), () => new Perk());
    this.draw(this.ctx);
    this.animate();

    this.pressedKeys = {};

    document.addEventListener('keydown', (e) => this.keyPressed(e.key));
    document.addEventListener('keyup', (e) => this.keyReleased(e.key));

  }


  draw(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);

    this.map.draw(ctx); // Draw Course Map
    // console.log((this.players));
    this.players.forEach(player => player.draw(ctx));// Draw Players
  }




  animate () {
    // this.moveObjects();
    this.update();

    this.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  keyPressed(key) {
    this.pressedKeys[key] = true;
  }

  keyReleased(key) {
    // if (this.pressedKeys[key]) this.pressedKeys[key] = false;
    delete this.pressedKeys[key];
  }

  update() {
    let playerDirection = [[0, 0], [0, 0]];
    let playerBlasters = [false, false];
    console.log(this.pressedKeys);
    if (this.pressedKeys) {
      // Player 1 Key Register
      if (this.pressedKeys.w) playerDirection[0][1] -= 1;
      if (this.pressedKeys.a) playerDirection[0][0] -= 1;
      if (this.pressedKeys.s) playerDirection[0][1] += 1;
      if (this.pressedKeys.d) playerDirection[0][0] += 1;
      if (this.pressedKeys.d) playerDirection[0][0] += 1;
      if (this.pressedKeys[' ']) playerBlasters[0] += true;

      // Player 2 Key Register
      if (this.pressedKeys.ArrowUp) playerDirection[1][1] -= 1;
      if (this.pressedKeys.ArrowLeft) playerDirection[1][0] -= 1;
      if (this.pressedKeys.ArrowDown) playerDirection[1][1] += 1;
      if (this.pressedKeys.ArrowRight) playerDirection[1][0] += 1;
      if (this.pressedKeys[0]) playerBlasters[0] += true;
    }

    this.players.forEach((player, idx) => {
      player.setVelocity(playerDirection[idx]);
      if (playerBlasters[idx]) player.fireBlasters();
      player.update();
    });
  }

}
