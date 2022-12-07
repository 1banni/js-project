import ShadowEdge from "./shadow-edge";
import Projectile from "../../moving/projectile";

export default class ShadowEdgeHorizontal extends ShadowEdge {
  constructor(x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }

  intersects(particle) {
    if (particle.layer === this.layer && this.intersectHelper(particle)
    ) {
      if (particle instanceof Projectile) {
        particle.reverseDir(1, -1);
        particle.decrBounces();
      } else {
        this.resetParticleY(particle);
        particle.reverseDir(1, -0.7);
      }
      return true;
    } else {
      return false;
    }
  }

  resetParticleY(particle) {
    if (particle.y < this.y) {
      particle.resetPos(particle.x, this.y - particle.radius - 1);
    } else {
      particle.resetPos(particle.x, this.y + particle.radius + 1);
    }
  }
  // // Draw method inherited
  // intersects (particle) {
  //   if (particle.layer === this.layer && this.intersectHelper(particle)) {
  //     if (particle instanceof Projectile) {
  //       particle.decrBounces();
  //       particle.reflectY();
  //       console.log('reflecting projectile y');
  //     } else if (particle instanceof Player) {
  //       this.resetParticleY(particle);
  //       // reflect Y
  //       particle.dy = particle.dy * -0.6;
  //     }
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }


  intersectHelper(particle) {
    return Math.abs(particle.y - this.y) <= particle.radius
      && particle.x + particle.radius >= this.x // particle's right-most point >= left end of line
      && particle.x - particle.radius <= this.x + this.dx; // particle's left-most point <= right end of line
  }
}
