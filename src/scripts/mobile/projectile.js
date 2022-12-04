import Motion from "./motion";

const CON = {
  COLOR: 'red',
  RADIUS: 15,
  SPEED: 10,
}

export default class Projectile {
  constructor(x, y, speed, damage) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.damage = damage;

    this.width = CON.RADIUS;
    this.height = CON.RADIUS;
    this.color = CON.COLOR;
  }

  draw(ctx) {
    this.y -= this.speed;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

