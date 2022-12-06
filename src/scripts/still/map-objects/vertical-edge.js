import Projectile from "../../moving/projectile";
import Edge from "./edge";

export default class VerticalEdge extends Edge {
  constructor(x, y, dx, dy, color) {
    super(x, y, dx, dy, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }

  // Draw method inherited
  intersects(particle) {
    if (particle.y + particle.radius >= this.y && // particle's southern-most point
      particle.y - particle.radius <= this.y + this.dy && // particle's northern-most point
      Math.abs(particle.x - this.x) <= particle.radius)
    {
      if (particle instanceof Projectile) {
        console.log('reflecting x');
        particle.reflectX();
      }
      return true;
    } else {
      return false;
    }
  }
}
