import Edge from "./edge";

export default class VerticalEdge extends Edge {
  constructor(x, y, dx, dy, color) {
    super(); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }

  // Draw method inherited
  intersects(particle) {
    if (particle.y + particle.radius >= this.y && // particle's southern-most point
      particle.y - particle.radius <= this.y + this.dy && // particle's northern-most point
      Math.abs(particle.x - this.x) <= particle.radius) {
      return true;
    } else {
      return false;
    }
  }
}
