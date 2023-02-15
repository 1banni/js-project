import { Util } from "../still/util.js";
import { PLAYER, PROJECTILE } from "../game-params.js";
import Particle from "./particle.js";

export default class Projectile extends Particle{
  // Increment projectile starting position to edge of player
  // Give velocity base on player's direction vector
  // Establish other relevant variables
  constructor(playerX, playerY, angle, layer, speed, damage) {
    let dir = Util.directionFrom(angle);
    // let [incrX, incrY] = Util.scale(dir, PLAYER.RADIUS + PROJECTILE.RADIUS);
    // let [incrX, incrY] = Util.scale(dir, PLAYER.RADIUS);
    let [incrX, incrY] = [0, 0]
    let x = playerX + incrX + PROJECTILE.CUSHION;
    let y = playerY + incrY + PROJECTILE.CUSHION;
    let radius = PROJECTILE.RADIUS;

    super(x, y, radius);

    this.layer = layer; // PROOF - MOVE TO SUPER
    this.damage = damage;
    this.active = false;
    this.drawCount = 0;
    [this.dx, this.dy] = Util.scale(dir, speed);


    console.log('playerX, playerY, incrX, incrY, PROJECTILE.CUSHION');
    console.log(playerX, playerY, incrX, incrY, PROJECTILE.CUSHION);
    console.log('this.x, this.y, this.dx, this.dy');
    console.log(this.x, this.y, this.dx, this.dy);

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
    this.drawCount++;
    if (this.drawCount > 3) {
      console.log('bullet active');
      this.active = true;
    }
    this.update();
  }

  update() {
    [this.x, this.y] = Particle.inbound(this.x + this.dx, this.y + this.dy, this.radius, true);
  }

  handleIntersect(x, y, edgeX, edgeY) {
    // if (x === -1) this.reverseDX();
    // if (y === -1) this.reverseDY();
    if (edgeX > 0) {
      console.log('updating edgeX');
      this.x = edgeX;
    } else if (edgeY > 0) {
      console.log('updating edgeY');
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

  decrBounces() {
    this.bounces = Math.max(0, --this.bounces);
  }

}

