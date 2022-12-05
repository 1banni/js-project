import Particle from "./-moving-object.js";
import { PLAYER_PARAMS } from "../game-parameters/player-params.js";
import { PROJECTILE } from "../game-parameters/projectile-params.js";
import { Util } from "../still/util.js";

export default class Projectile extends Particle{
  constructor(x, y, angle, speed, damage) {
    let [incrX, incrY] = Util.scale(Util.directionFrom(angle), PLAYER_PARAMS.RADIUS + PROJECTILE.RADIUS);
    let extraCushion = 3;
    // this.x = x + incrX;
    // this.y = y + incrY;
    // this.radius = PROJECTILE.RADIUS;
    super(x + incrX + extraCushion, y + incrY + extraCushion, PROJECTILE.RADIUS);
    [this.dx, this.dy] = Util.scale(Util.directionFrom(angle), speed);
    this.damage = damage;
    this.color = PROJECTILE.COLOR;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

  }

  draw(ctx) {
    console.log('drawing projectile');
    Util.infreqLog(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius,
      0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
    this.update();
  }

  // PROOF : MODIFY THIS FUNCTION TO FIT YOUR CODE OR REPORT SOURCE https://www.youtube.com/watch?v=i7FzA4NavDs

}

