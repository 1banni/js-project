import { MAP_BORDER } from "../game-parameters/map-params"
import { PERK } from "../game-parameters/perk-params";

// ALL QUIRKS WILL HAVE: POSITION, taken (status, turns to true in player inventory),
// ALL QUIRK SUBCLASSES MUST HAVE A METHOD TO ADD THEMSELVES TO PLAYER INVENTORY / REMOVE FROM MAP
// UPON COLLISION

export default class Perk {
  constructor(x, y, type) {
    // Position
    this.x = x;
    this.y = y;

    // Type
    console.log('type', type);
    this.type = type;

    // Expiration
    this.startTime;
    this.time;
    this.alive = true;

  }

  collideWith(player) {
    if (player.layer > 0) return false; // Perks only exist on layer 0

    let dist = Math.sqrt((this.x - player.x) ** 2 + (this.y - player.y) ** 2);
    if (dist < player.radius * 3) {
      return true;
    } else {
      return false;
    }
  }

  decrFrames() {
    this.time = new Date().getTime();
    if (!this.startTime) this.startTime = this.time;
    let timePassed = this.time - this.startTime;

    if (timePassed > 1000 * PERK.SECONDS_APPEARING) this.alive = false;
    return this.alive;
  }


}
