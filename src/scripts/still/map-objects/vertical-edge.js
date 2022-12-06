import Edge from "./edge";
import Projectile from "../../moving/projectile";

export default class VerticalEdge extends Edge {
  constructor(x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }

  intersects(particle) {
    console.log('in vertical intersect');
    if (particle.layer === this.layer && this.intersectHelper(particle)
    ) {
      if (particle instanceof Projectile) {
        particle.reverseDir(-1, 1);
        particle.decrBounces();
      } else {
        this.resetParticleX(particle);
        particle.reverseDir(-0.7, 1);
      }
      return true;
    } else {
      return false;
    }
  }

  resetParticleX(particle) {
    if (particle.x < this.x) {
      particle.resetPos(this.x - particle.radius - 1, particle.y);
    } else {
      particle.resetPos(this.x + particle.radius + 1, particle.y);
    }
  }

  intersectHelper (particle) {
    return Math.abs(particle.x - this.x) <= particle.radius
      && particle.y + particle.radius >= this.y // particle's bottoom-most point >= top end of line
      && particle.y - particle.radius <= this.y + this.dy; // particle's top-most point <= bottom end of line
  }
}
