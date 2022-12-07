import ShadowEdge from "./shadow-edge";
import Projectile from "../../moving/projectile";

export default class ShadowEdgeVertical extends ShadowEdge {
  constructor(x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }
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


