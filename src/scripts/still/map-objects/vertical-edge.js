import Edge from "./edge";
import Projectile from "../../moving/projectile";

export default class VerticalEdge extends Edge {
  constructor(x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }

  // Draw method inherited
  intersects(particle) {
    if (particle.y + particle.radius >= this.y && // particle's southern-most point
      particle.y - particle.radius <= this.y + this.dy && // particle's northern-most point
      Math.abs(particle.x - this.x) <= particle.radius)
    {
      if (particle.layer === this.layer && particle instanceof Projectile) {
        console.log('reflecting x');
        particle.reflectX();
        particle.decrBounces();
      }
      return true;
    } else {
      return false;
    }
  }
}
