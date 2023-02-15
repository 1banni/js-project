import Projectile from "./projectile.js";
import _ from "lodash";

export default class ProjectileController {
  projectiles =  [];
  timeBetweenProjectiles = 0;
  delay = 3;

  constructor(ctx, edgeController) {
    this.ctx = ctx;
    this.edgeController = edgeController;
  }

  update() {
    this.projectiles.forEach((projectile) => projectile.update());
  }

  delete(projectile) {
    this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
  }

  drawLayer(ctx, layer) {
    this.projectiles.forEach(projectile => {
      if (projectile.layer === layer) {
        if (projectile.bounces === 0) {
          this.delete(projectile);
        } else {
          projectile.draw(ctx);
        }
      }
    });
  }

  checkIntersections() {
    this.projectiles.forEach( projectile => this.edgeController.intersects(projectile));
  }

  collideWith(player) {
    this.projectiles = _.reject(this.projectiles, (projectile) => {
      if (projectile.collideWith(player)) {
        if (projectile.active) {
          player.damage(projectile.damage);
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    })
  }

  shoot(x, y, angle, layer, speed, damage) {
    this.projectiles.push(new Projectile(x, y, angle, layer, speed, damage));
  }
}
