import Particle from "./particle.js";
import { PLAYERS } from "../game-parameters/player-params.js";
import { PROJECTILE } from "../game-parameters/projectile-params.js";
import { Util } from "../still/util.js";

export default class Projectile extends Particle{
  constructor(x, y, angle, layer, speed, damage) {
    let [incrX, incrY] = Util.scale(Util.directionFrom(angle), PLAYERS.RADIUS + PROJECTILE.RADIUS);
    super(x + incrX + PROJECTILE.CUSHION, y + incrY + PROJECTILE.CUSHION, PROJECTILE.RADIUS);

    this.layer = layer;
    this.damage = damage;
    [this.dx, this.dy] = Util.scale(Util.directionFrom(angle), speed);

    this.color = PROJECTILE.COLOR;
    this.bounces = PROJECTILE.BOUNCES;
  }

  draw(ctx) {
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

  update() {
    [this.x, this.y] = Particle.inbound(this.x + this.dx, this.y + this.dy, this.radius, true);
  }

  handleIntersect(x, y) {
    // if (x === -1) this.reverseDX();
    // if (y === -1) this.reverseDY();
    this.reverseDir(x, y);
    this.decrBounces();
  }

  reverseDX() {
    this.dx *= -1;
  }

  reverseDY() {
    this.dy *= -1;
  }

  decrBounces() {
    this.bounces = Math.max(0, --this.bounces);
  }

}

