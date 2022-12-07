import { MAP_BORDER } from "../../game-parameters/map-params"


// ALL QUIRKS WILL HAVE: POSITION, taken (status, turns to true in player inventory),
// ALL QUIRK SUBCLASSES MUST HAVE A METHOD TO ADD THEMSELVES TO PLAYER INVENTORY / REMOVE FROM MAP
// UPON COLLISION

export default class Quirk {
  constructor(x, y, layer) {
    // x = MAP_BORDER.WALL_PADDING + Math.random() * (DIM_X - MAP_BORDER.WALL_PADDING * 2);
    // y = MAP_BORDER.WALL_PADDING + Math.random() * (DIM_Y - MAP_BORDER.WALL_PADDING * 2);
    // this.taken = false;
    this.lifeInFrames = 10 * 10^4;
  }

  collision() {

  }

  update() {

  }
}
