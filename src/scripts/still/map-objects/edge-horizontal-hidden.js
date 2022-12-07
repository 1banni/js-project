import ShadowEdge from "./shadow-edge";
import Projectile from "../../moving/projectile";

export default class EdgeHorizontalHidden extends EdgeHorizontal {
  constructor(x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }
}

//   intersects(particle) {
//     if (particle.layer === this.layer && this.intersectHelperY(particle)
//     ) {
//       if (particle instanceof Projectile) {
//         particle.reverseDir(1, -1);
//         particle.decrBounces();
//       } else {
//         this.resetParticleY(particle);
//         particle.reverseDir(1, -0.7);
//       }
//       return true;
//     } else {
//       return false;
//     }
//   }
