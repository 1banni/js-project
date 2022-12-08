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




}

