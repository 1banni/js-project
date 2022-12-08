import { map } from "lodash";
import { MAP, HEALTH_BAR } from "../game-params";
import { Util } from "../still/util";


export default class PlayerHealth {
  constructor(health, color, playerIndex) {
    this.health = health;
    this.maxHealth = health;
    this.color = color;
    this.playerIndex = playerIndex;
    this.x = (playerIndex === 0 ? MAP.BORDER_WIDTH * 1 / 6 : MAP.DIM_X - MAP.BORDER_WIDTH * 1 / 6 - HEALTH_BAR.WIDTH);
    this.y = MAP.BORDER_HEIGHT; //MAP.DIM_Y / 2;

    let incrX = playerIndex * (HEALTH_BAR.WIDTH + HEALTH_BAR.PADDING/2);
    // this.x = Math.floor(MAP.DIM_X - HEALTH_BAR.WIDTH - HEALTH_BAR.PADDING - incrX - 50);
    // this.y = Math.floor(MAP.DIM_Y * 1 / 160);
  }

  damage(points) {
    this.health = Math.max(0, this.health - points);
  }

  restore(points) {
    this.health = Math.min(this.maxHealth, this.health + points);
  }

  draw (ctx) {
    // Draw Red Bar
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    // ctx.fillStyle = null;
    // ctx.fillStyle = '#000000';
    ctx.strokeRect(this.x, this.y, HEALTH_BAR.WIDTH, HEALTH_BAR.HEIGHT, 5);

    // Draw Player Color Bar
    let gap = 3;
    // let healthWidth = Math.floor((this.health / this.maxHealth) * HEALTH_BAR.WIDTH);
    let healthHeight = Math.floor((this.health / this.maxHealth) * HEALTH_BAR.HEIGHT);
    ctx.fillStyle = '#33ff33';
    ctx.fillRect(this.x + gap, HEALTH_BAR.HEIGHT - Math.max(0, healthHeight) + this.y + gap, HEALTH_BAR.WIDTH - gap * 2, healthHeight - gap * 2);

    // ctx.fillStyle = playerColor;
    // Draw 'Player #{playerIndex} Health'
    ctx.font = "bold 17pt arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.color;
    if (this.playerIndex === 0) {
      // ctx.fillRect(this.x + (HEALTH_BAR.WIDTH / 2) + 12, this.y - 15, 10, 5);
      ctx.fillText(`Player ${this.playerIndex + 1}`, this.x + (HEALTH_BAR.WIDTH / 2)+18, this.y - 25);
    } else {
      ctx.fillText(`Player ${this.playerIndex + 1}`, this.x + (HEALTH_BAR.WIDTH / 2)-18, this.y - 25);

    }
  }


}

