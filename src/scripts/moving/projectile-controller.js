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

  delete(projectile) {
    this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
  }

  checkIntersections() {
    this.projectiles.forEach( projectile => this.edgeController.intersects(projectile));
  }

  // PROOF - THIS METHOD DOESN'T ACCOUNT FOR PROJECTILES GOING OFF BOTTOM LEFT / TOP RIGHT OF SCREEN
  // PROOF - CONSIDER REWRITING THIS. OTHER MAP OBJECTS
  isOutOfBounds(projectile) {
    return projectile.x <= -projectile.width + MAP_BORDER.WALL_PADDING &&
      projectile.y <= -projectile.height + MAP_BORDER.WALL_PADDING &&
      projectile.x >= DIM_X - MAP_BORDER.WALL_PADDING - projectile.width &&
      projectile.y >= DIM_Y - MAP_BORDER.WALL_PADDING - projectile.height;
  }

  collisionType(projectile) {
    if (!(projectile.x <= -projectile.width + MAP_BORDER.WALL_PADDING &&
      projectile.x >= 1200 - MAP_BORDER.WALL_PADDING - projectile.width
    )) {
      return 'horizontal';
    }
    else if (!(projectile.y <= -projectile.height + MAP_BORDER.WALL_PADDING &&
      projectile.y >= 1200 - MAP_BORDER.WALL_PADDING - projectile.height)
    ) {
      return 'vertical';
    }
    return 'unsure - see projectile-coontroller#collisionType(projectile) method'
  }


  // PROOF: MODIFY THIS FUNCTION TO FIT YOUR CODE OR REPORT SOURCE https://www.youtube.com/watch?v=i7FzA4NavDs
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
    // console.log('drawing projectiles');
    this.projectiles.forEach(projectile => {
      if (this.isOutOfBounds(projectile)) {
        // console.log('deleting projectile');
        // this.delete(projectile);
        if (this.collisionType(projectile) === 'horizontal') {

        } else {

        }
      } else {
        // console.log('drawing projectile');
        projectile.draw(ctx);
      }
    });
  }

}
