import { Util } from "../still/util.js";
import { PLAYER, PROJECTILE } from "../GameParams.js";
import Particle from "./Particle.js";

export default class Projectile extends Particle{
  // Increment projectile starting position to edge of player
  // Give velocity base on player's direction vector
  // Establish other relevant variables
  constructor(playerX, playerY, angle, layer, speed, damage) {
    let dir = Util.directionFrom(angle);
    let [incrX, incrY] = [0, 0]
    // Alternate Settings:
    // let [incrX, incrY] = Util.scale(dir, PLAYER.RADIUS);
    // let [incrX, incrY] = Util.scale(dir, PLAYER.RADIUS + PROJECTILE.RADIUS);
    let x = playerX + incrX + PROJECTILE.CUSHION;
    let y = playerY + incrY + PROJECTILE.CUSHION;
    let radius = PROJECTILE.RADIUS;
    super(x, y, radius, layer);
    this.damage = damage;
    this.active = false;
    this.drawCount = 0;
    [this.dx, this.dy] = Util.scale(dir, speed);
    this.color = PROJECTILE.COLOR;
    this.bounces = PROJECTILE.BOUNCES;
  }

  draw(ctx) {
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();

    if (this.drawCount <= 3) this.drawCount++;
    if (this.drawCount > 3) this.active = true;

    this.update();
  }

  update() {
    [this.x, this.y] = Particle.inbound(
      this.x + this.dx,
      this.y + this.dy,
      this.radius,
      true
    );
    this.updateLayer();
  }

  decrBounces() {
    this.bounces = Math.max(0, --this.bounces);
  }

  handleIntersect(x, y, edgeX, edgeY) {
    // Edge passed in tells where vertically/horizontally to place item
    if (edgeX > 0) {
      this.x = edgeX;
    } else if (edgeY > 0) {
      this.y = edgeY;
    }
    this.reverseDir(x, y);
    this.decrBounces();
  }

  reverseDX() {
    this.dx *= -1;
  }

  reverseDY() {
    this.dy *= -1;
  }


}

