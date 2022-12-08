import { MAP_BORDER, DIM_X, DIM_Y, PLATFORMS } from "../game-parameters/map-params";

export default class Particle {
  constructor (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }


  collideWith(player) {
    let dist = Math.sqrt((this.x - player.x) ** 2 + (this.y - player.y) ** 2);
    let radiiLengths = this.radius + player.radius;
    if (dist < radiiLengths) {
      // player.damage(this.damage);
      return true;
    } else {
      return false;
    }
  }

  resetPos(x, y) {
    this.x = x;
    this.y = y;
  }

  reverseDir(x, y) {
    this.dx = this.dx * x;
    this.dy = this.dy * y;
  }

  updateLayer() {
    let prevLayer = this.layer;
    let sp = 5;
    // outer if checks x location; inner width checks y location
    PLATFORMS[0][0]
    if (this.x > PLATFORMS[0][0] && this.x < PLATFORMS[0][0] + MAP_BORDER.PLATFORM_WIDTH - sp) {
      if (this.y > PLATFORMS[0][1] && this.y < PLATFORMS[0][1] + MAP_BORDER.PLATFORM_HEIGHT) {
        this.layer = 1;
      } else if (this.y > PLATFORMS[1][1] && this.y < PLATFORMS[1][1] + MAP_BORDER.PLATFORM_HEIGHT) {
        this.layer = 1;
      }
    } else if (this.x > PLATFORMS[2][0] && this.x < PLATFORMS[2][0] + MAP_BORDER.PLATFORM_WIDTH) {
      if (this.y > PLATFORMS[0][1] && this.y < PLATFORMS[0][1] + MAP_BORDER.PLATFORM_HEIGHT) {
        this.layer = 1;
      } else if (this.y > PLATFORMS[1][1] && this.y < PLATFORMS[1][1] + MAP_BORDER.PLATFORM_HEIGHT) {
        this.layer = 1;
      }
    }

    // if below or above top/bottom of platforms, set layer to zero
    if (this.y < PLATFORMS[0][1] || this.y > PLATFORMS[1][1] + MAP_BORDER.PLATFORM_HEIGHT) {
      this.layer = 0;
    }
    else if (this.x < PLATFORMS[0][0] || this.x > PLATFORMS[2][0] + MAP_BORDER.PLATFORM_HEIGHT) {
      this.layer = 0;
    }

    // PROOF - Delete, for debugging
    if (this.layer !== prevLayer) {
      console.log(`${this.constructor.name} ${this.idx}'s layer changed from ${prevLayer} to ${this.layer}`);
    }
  }

  static inbound(x, y, radius, alive) {
    // console.log('pre-inbound', x, y);
    if (!alive) return [x, y];

    let space = 2;
    let x0 = MAP_BORDER.WALL_PADDING - space;
    let y0 = MAP_BORDER.WALL_PADDING - space;
    let x1 = DIM_X - MAP_BORDER.WALL_PADDING + space;
    let y1 = DIM_Y - MAP_BORDER.WALL_PADDING + space;
    if (x < x0 + radius) {
      x = x0 + radius;
    } else if (x > x1 - radius) {
      x = x1 - radius;
    }

    if (y < y0) {
      y = y1;
    } else if (y > y1) {
      y = y0;
    }
    // console.log('post-inbound', x, y);
    return [x, y];
  }
}
