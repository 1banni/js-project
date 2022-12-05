



class Particle {

  constructor (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  collideWith(particle) {
    let dist = Math.sqrt((this.x - particle.x) ** 2 + (this.y - particle.y) ** 2);
    let radiiLengths = this.radius + particle.radius;
    return (distSquared ? true : false);
  }




  
}
