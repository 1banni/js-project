import Edge from "./edge";
import Projectile from "../../moving/projectile";

export default class HorizontalEdge extends Edge {
  constructor(x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }

  // Draw method inherited
  intersects(particle) {
    if (particle.x + particle.radius >= this.x && // particle's right-most point >= left end of line
      particle.x - particle.radius <= this.x + this.dx && // particle's left-most point <= right end of line
      Math.abs(particle.y - this.y) <= particle.radius)
    {
      console.log('hello');
      if (particle.layer === this.layer && particle instanceof Projectile) {
        console.log('reflecting y');
        particle.reflectY();
        particle.decrBounces();
      }
      return true;
    } else {
      return false;
    }
  }
}
