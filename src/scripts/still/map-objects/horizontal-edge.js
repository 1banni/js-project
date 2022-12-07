import Edge from "./edge";
import Projectile from "../../moving/projectile";

export default class HorizontalEdge extends Edge {
  constructor (x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }

  intersects(particle) {
    if (particle.layer === this.layer) {
      if (this instanceof HorizontalEdge && this.intersectHelperY(particle)
      ) {
        if (particle instanceof Projectile) {
          particle.reverseDir(1,-1);
          particle.decrBounces();
        } else {
          this.resetParticleY(particle);
          particle.reverseDir(1,-0.7);
        }
        return true;
      } else if (particle.layer === this.layer && this.intersectHelperX(particle)
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
    else {
      return false;
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



}


  // Figure out which side of edge the particle is on
