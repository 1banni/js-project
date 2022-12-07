import { DIM_X, DIM_Y } from "../game-parameters/map-params";
import { MAP_BORDER } from "../game-parameters/map-params";
import { HEART_BAR } from "../game-parameters/heart-params";


export default class Heart {
  // Steps: PROOF
  // - Add a constructor - should have an index (0, 1, 2) that will be used for relative position
  // - create an update method (pass in player position and heart #, set heart position relative to player)
  // - Add a draw method: should take ctx as param
  // -
  constructor(initialHealth, maxHealth, color, playerIndex) {
    this.health = initialHealth;
    this.maxHealth = maxHealth;
    this.color = color;
    this.playerIndex = playerIndex;

    let incrX = playerIndex * (HEART_BAR.WIDTH + HEART_BAR.PADDING/2);
    this.x = Math.floor(DIM_X - HEART_BAR.WIDTH - HEART_BAR.PADDING - incrX - 50);
    this.y = Math.floor(DIM_Y * 1 / 160);
  }

  damage(points) {
    this.health = Math.max(0, this.health - points);
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
    ctx.font = "bold 18px arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#181818";
    ctx.fillText(`Health P${this.playerIndex}`, this.x + (HEART_BAR.WIDTH / 2), this.y + (HEART_BAR.HEIGHT / 2));
  }


}

