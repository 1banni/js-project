import Edge from "./edge";

export default class EdgeHorizontal extends Edge {
  constructor (x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }

  intersects(particle) {
    if (particle.layer === this.layer && this.intersectHelperY(particle)
    ) {
      if (particle instanceof Projectile) {
        particle.reverseDir(1, -1);
        particle.decrBounces();
      } else {
        this.resetParticleY(particle);
        particle.reverseDir(1, -0.7);
      }
      return true;
    } else {
      return false;
    }
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


