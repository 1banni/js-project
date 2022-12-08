import { MAP_BORDER, DIM_X, DIM_Y } from "../game-parameters/map-params";

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
