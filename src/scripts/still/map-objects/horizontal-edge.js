import Edge from "./edge";
import Projectile from "../../moving/projectile";

export default class HorizontalEdge extends Edge {
  constructor (x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
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


