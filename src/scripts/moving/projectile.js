import { PLAYER } from "../game-parameters/player-params.js";
import { PROJECTILE } from "../game-parameters/projectile-params.js";
import { Util } from "../still/util.js";

export default class Projectile {
  constructor(x, y, angle, speed, damage) {
    console.log('in constructor');
    let [incrX, incrY] = Util.scale(Util.directionFrom(angle), PLAYER.RADIUS + PROJECTILE.RADIUS);
    console.log('x',x);
    console.log('y',y);
    console.log('angle',angle);
    console.log('speed',speed);
    this.x = x + incrX;
    this.y = y + incrY;
    // this.angle = angle;
    let [dx, dy] = Util.scale(Util.directionFrom(angle), speed);
    this.dx = dx;
    this.dy = dy;
    // this.speed = speed;
    // this.damage = damage;
    // this.WIDTH = options.WIDTH;
    this.radius = PROJECTILE.RADIUS;
    this.color = PROJECTILE.COLOR;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

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

  // PROOF : MODIFY THIS FUNCTION TO FIT YOUR CODE OR REPORT SOURCE https://www.youtube.com/watch?v=i7FzA4NavDs
  collideWith(sprite) {
    if (this.x < sprite.x + sprite.width &&
        this.x + this.width > sprite.x &&
        this.y < sprite.y + sprite.height &&
        this.y + this.height > sprite.y
    ) {
      sprite.takeDamage(this.damage);
      return true;
    } else {
      return false;

    }
  }
}

