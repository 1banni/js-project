import { MAP } from "../GameParams";

export default class Particle {
  constructor (x, y, radius, layer) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.layer = layer;
  }

  collideWith (particle) {
    let squaredDistance = (this.x - particle.x) ** 2 + (this.y - particle.y) ** 2;
    let squaredSumOfRadii = (this.radius + particle.radius) ** 2;
    return (squaredDistance < squaredSumOfRadii ? true : false);
  }

  resetPos (x, y) {
    this.x = x;
    this.y = y;
  }

  reverseDir (x, y) {
    this.dx = this.dx * x;
    this.dy = this.dy * y;
  }

  onPlatform () {
    let sp = MAP.BORDER_WIDTH;
    // Checks if both x (i) and y (o) coordinates of particle are on a platform
    let i = false;
    let o = false;

    if (this.x > MAP.PLATFORM_POS[0][0]
     && this.x < MAP.PLATFORM_POS[0][0] + MAP.PLATFORM_WIDTH - sp)
    {
      i = true;
    }
    else if (this.x > MAP.PLATFORM_POS[2][0]
          && this.x < MAP.PLATFORM_POS[2][0] + MAP.PLATFORM_WIDTH)
    {
      i = true;
    }

    if (this.y > MAP.PLATFORM_POS[0][1]
     && this.y < MAP.PLATFORM_POS[0][1] + MAP.PLATFORM_HEIGHT)
    {
      o = true;
    }
    else if (this.y > MAP.PLATFORM_POS[1][1]
      && this.y < MAP.PLATFORM_POS[1][1] + MAP.PLATFORM_HEIGHT)
    {
      o = true;
    }

    return i && o;
  }

  beyondPlatform() {
    return this.y < MAP.PLATFORM_POS[0][1]
        || this.y > MAP.PLATFORM_POS[1][1] + MAP.PLATFORM_HEIGHT
        || this.x < MAP.PLATFORM_POS[0][0]
        || this.x > MAP.PLATFORM_POS[2][0] + MAP.PLATFORM_HEIGHT
  }

  updateLayer() {
    // If the particle is inside of one of the four platforms, set layer to 1
    if (this.onPlatform()) this.layer = 1;

    // if below or above top/bottom of platforms, set layer to 0
    if (this.beyondPlatform()) this.layer = 0;
  }
    // For debugging
    // if (this.layer !== prevLayer) {
    //   console.log(`${this.constructor.name} ${this.idx}'s layer changed from ${prevLayer} to ${this.layer}`);
    // }

  // Future Update: Make non-static
  static inbound(x, y, radius, alive) {
    if (!alive) return [x, y];

    let space = 1;
    let x0 = MAP.BORDER_WIDTH;
    let y0 = MAP.BORDER_HEIGHT - space;
    let x1 = MAP.DIM_X - MAP.BORDER_WIDTH;
    let y1 = MAP.DIM_Y - MAP.BORDER_HEIGHT + space;

    // if (x < x0 + radius) {
    //   x = x0 + radius + space*2;
    // } else if (x > x1 - radius) {
    //   x = x1 - radius - space*2;
    // }

    if (y < y0 - radius) {
      y = y1;
    } else if (y > y1 + radius - 1) { // NOTE: NEGATIVE ONE IS NECESSARY TO PREVENT FLICKERING
      y = y0;
    }

    return [x, y];
  }
}
