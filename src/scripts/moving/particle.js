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

  reverseDir(dxMult, dyMult) {
    this.dx = this.dx * dxMult;
    this.dy = this.dy * dyMult;
  }
}
