import Projectile from "./projectile.js";

let bool = 0;

export default class ProjectileController {
  projectiles = [];
  timeBetweenProjectiles = 0;

  constructor(ctx) {
    this.ctx = ctx;
  }

  shoot(x, y, speed, damage, delay) {
    if (this.timeBetweenProjectiles <= 0) {
      this.projectiles.push(new Projectile(x, y, speed, damage));
      this.timeBetweenProjectiles = delay;
    }

    this.timeBetweenProjectiles--;
  }

  draw(ctx) {
    // if (bool++ % 50 === 0) console.log('this.projectiles', this.projectiles);
    this.projectiles.forEach(projectile => {
      if (this.isOOB(projectile)) {
        const index = this.projectiles.indexOf(projectile);
        this.projectiles.splice(index, 1);
      }
      projectile.draw(ctx);
    });
  }

  // PROOF - THIS METHOD DOESN'T ACCOUNT FOR PROJECTILES GOING OFF BOTTOM LEFT / RIGHT OF SCREEN
  isOOB(projectile) {

    return projectile.x <= -projectile.width &&
           projectile.y <= -projectile.height &&
           projectile.x >= 1200 - projectile.width && 
           projectile.y >= 800 - projectile.height;
  }

}
