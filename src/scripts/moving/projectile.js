
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
    // this.radius = options.radius;
    this.width = CON.RADIUS;
    this.height = CON.RADIUS;
    this.color = CON.COLOR;
  }

  draw(ctx) {
    this.y -= this.speed;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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

