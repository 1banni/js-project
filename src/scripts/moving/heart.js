import { DIM_X, DIM_Y } from "../game-parameters/pos-and-dim";
import { MAP_BORDER } from "../game-parameters/map-params";
import { HEART_BAR } from "../game-parameters/heart-params";


export default class Heart {
  // Steps:
  // - Add a constructor - should have an index (0, 1, 2) that will be used for relative position
  // - create an update method (pass in player position and heart #, set heart position relative to player)
  // - Add a draw method: should take ctx as param
  // -
  constructor(initialHealth, maxHealth, color, playerIndex) {
    this.health = initialHealth;
    this.maxHealth = maxHealth;
    this.color = color;
    this.playerIndex = playerIndex;

    let incrY = playerIndex * (HEART_BAR.HEIGHT + 8);
    this.x = Math.floor((DIM_X * 3 / 4) - HEART_BAR.WIDTH);
    this.y = Math.floor(DIM_Y * 1 / 160 + incrY);
  }

  damage(points) {
    console.log('points', points);
    console.log('this.health',this.health);
    this.health = Math.max(0, this.health - points);
    console.log('this.health',this.health);
  }

  draw (ctx) {
    // Draw Red Bar
    ctx.fillStyle = 'red';
    ctx.shadowBlur = 0;
    ctx.fillRect(this.x, this.y, HEART_BAR.WIDTH, HEART_BAR.HEIGHT, 5);

    // Draw Player Color Bar
    let healthWidth = Math.floor((this.health / this.maxHealth) * HEART_BAR.WIDTH);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, healthWidth, HEART_BAR.HEIGHT, 5);

    // Draw 'Player #{playerIndex} Health'
    // ctx.font = "bold 12px arial";
    // ctx.textAlign = "center";
    // ctx.textBaseline = "middle";
    // ctx.fillStyle = "#ffffff";
    // ctx.fillText(`Player ${this.playerIndex} Health`, this.x + (HEART_BAR.WIDTH / 2), this.y + (HEART_BAR.HEIGHT / 2));
  }


}

