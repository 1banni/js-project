import { MAP, HEALTH_BAR } from "../GameParams";

export default class PlayerHealth {
  constructor(health, color, playerIndex) {
    this.health = health;
    this.maxHealth = health;
    this.color = color;
    this.playerIndex = playerIndex;
    this.x = (playerIndex === 0 ? MAP.BORDER_WIDTH * 1 / 6 : MAP.DIM_X - MAP.BORDER_WIDTH * 1 / 6 - HEALTH_BAR.WIDTH);
    this.y = MAP.BORDER_HEIGHT; //MAP.DIM_Y / 2;

    let incrX = playerIndex * (HEALTH_BAR.WIDTH + HEALTH_BAR.PADDING/2);
  }

  damage(points) {
    this.health = Math.max(0, this.health - points);
  }

  restore(points) {
    this.health = Math.min(this.maxHealth, this.health + points);
  }
}

