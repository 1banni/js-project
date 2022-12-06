import { DIM_X, DIM_Y, MAP_BORDER } from "../game-parameters/map-params.js";
import Projectile from "./projectile.js";

let bool = 0;

// let startingProjectiles = 10;

/******************** ********************/
/*
  note - you should probably wrap this differently (use animate functio and
         remove loop from within projectile's draw method)
*/
/******************** ********************/

export default class ProjectileController {
  projectiles =  [];
  timeBetweenProjectiles = 0;

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

  // draw(ctx) {
  //   this.projectiles.forEach(projectile => {
  //     if (this.isOutOfBounds(projectile) || projectile.bounces === 0) {
  //       this.delete(projectile);
  //       // if (this.collisionType(projectile) === 'horizontal') {
  //       // } else {
  //       // }
  //     } else {
  //       projectile.draw(ctx);
  //     }
  //   });
  // }

  checkIntersections() {
    this.projectiles.forEach( projectile => this.edgeController.intersects(projectile));
  }

  collideWith(player) {
    return this.projectiles.some(projectile => {
      if (projectile.collideWith(player)) {
        this.delete(projectile);
        player.damage(projectile.damage);
        return true;
      } else {
        return false;
      }
    });
  }


  shoot(x, y, angle, layer, speed, damage, delay) {
    if (this.timeBetweenProjectiles <= 0) {
      this.projectiles.push(new Projectile(x, y, angle, layer, speed, damage));
      this.timeBetweenProjectiles = delay;
    }

    this.timeBetweenProjectiles--;
  }


  // collisionType(projectile) {
  //   if (!(projectile.x <= -projectile.width + MAP_BORDER.WALL_PADDING &&
  //     projectile.x >= 1200 - MAP_BORDER.WALL_PADDING - projectile.width
  //   )) {
  //     return 'horizontal';
  //   }
  //   else if (!(projectile.y <= -projectile.height + MAP_BORDER.WALL_PADDING &&
  //     projectile.y >= 1200 - MAP_BORDER.WALL_PADDING - projectile.height)
  //   ) {
  //     return 'vertical';
  //   }
  //   return 'unsure - see projectile-coontroller#collisionType(projectile) method';
  // }
}
