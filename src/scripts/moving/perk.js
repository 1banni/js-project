import { PERK } from "../GameParams";

export default class Perk {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.startTime;
    this.time;
    this.alive = true;
  }

  collideWith(player) {
    // Perks only exist on layer 0
    if (player.layer > 0) return false;

    // Is player close enough to the perk to collide?
    let dist = Math.sqrt((this.x - player.x) ** 2 + (this.y - player.y) ** 2);
    if (dist < player.radius * 3) {
      return true;
    } else {
      return false;
    }
  }

  // Ages and destroys perk after PERK.SECONDS_APPEARING
  isActive () {
    this.time = new Date().getTime();
    if (!this.startTime) this.startTime = this.time;
    let timePassed = this.time - this.startTime;

    if (timePassed > 1000 * PERK.SECONDS_APPEARING) this.alive = false;
    return this.alive;
  }
}
