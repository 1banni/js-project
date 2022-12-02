/** @type {HTMLCanvasElement} */

const CON = {
  MAX_HEALTH: 100,
  MAX_SPEED: 5,
  RADIUS: 15,
  MAX_NOS: 40,
  // TURN_RADIUS: 3;
}


export default class Player {
  constructor(pos, color) {
    this.pos = pos;
    this.color = color;
    this.radius = CON.RADIUS;
    this.health = CON.MAX_HEALTH;
    this.nitrous = CON.MAX_NOS;
    this.speed = 0;
    this.direction = 0;
  }

  // PROOF: Potential Bug - Think about how you're passing context around
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius,
            0, 2 * Math.PI, false);
    ctx.fill();
  }
}
