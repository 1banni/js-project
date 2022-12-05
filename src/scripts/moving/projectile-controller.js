import Projectile from "./projectile.js";

let bool = 0;

// let startingProjectiles = 10;

export default class ProjectileController {
  projectiles =  [];
  timeBetweenProjectiles = 0;

  constructor(ctx) {
    this.ctx = ctx;
  }
  update() {
    this.projectiles.forEach((projectile) => projectile.update());
  }


  shoot(x, y, angle, speed, damage, delay) {
    if (this.timeBetweenProjectiles <= 0) {
      this.projectiles.push(new Projectile(x, y, angle, speed, damage));
      this.timeBetweenProjectiles = delay;
    }

    this.timeBetweenProjectiles--;
  }

  draw(ctx) {
    // if (bool++ % 50 === 0) console.log('this.projectiles', this.projectiles);
    this.projectiles.forEach(projectile => {
      if (this.isOutOfBounds(projectile)) {
        const index = this.projectiles.indexOf(projectile);
        this.projectiles.splice(index, 1);
      }
      projectile.draw(ctx);
    });
  }

  // PROOF - THIS METHOD DOESN'T ACCOUNT FOR PROJECTILES GOING OFF BOTTOM LEFT / RIGHT OF SCREEN
  isOutOfBounds(projectile) {
    return projectile.x <= -projectile.width + 50 &&
           projectile.y <= -projectile.height + 50 &&
           projectile.x >= 1200 - 50 - projectile.width &&
           projectile.y >= 1200 - 50 - projectile.height;
  }

  // PROOF: MODIFY THIS FUNCTION TO FIT YOUR CODE OR REPORT SOURCE https://www.youtube.com/watch?v=i7FzA4NavDs
  collideWith(player) {
    return this.projectiles.some(projectile => {
      if (projectile.collideWith(player)) {
        this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
        return true;
      } else {
        return false;
      }
    });
  }
}
