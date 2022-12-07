import ShadowEdge from "./shadow-edge";
import Projectile from "../../moving/projectile";

export default class VerticalEdgeShadow extends VerticalEdge {
  constructor(x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color);
  }

  // PROOF: comment in once working
  // draw () {}

}

  // intersects(particle) {
  //   if (particle.layer === this.layer && this.intersectHelperX(particle)
  //   ) {
  //     if (particle instanceof Projectile) {
  //       particle.reverseDir(-1, 1);
  //       particle.decrBounces();
  //     } else {
  //       this.resetParticleX(particle);
  //       particle.reverseDir(-0.7, 1);
  //     }
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }


