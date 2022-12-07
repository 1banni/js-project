


export default class Edge {
  constructor(x, y, dx, dy, layer, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.layer = layer;
    this.color = color;
    // this.type = (this.dx === 0
    //               ? 'vertical'
    //               : this.dy === 0
    //                 ? 'horizontal'
    //                 : 'diagonal' );
  }

  draw(ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.dx, this.y + this.dy);
    ctx.stroke();
  }

  resetParticleY(particle) {
    if (particle.y < this.y) {
      particle.resetPos(particle.x, this.y - particle.radius - 1);
    } else {
      particle.resetPos(particle.x, this.y + particle.radius + 1);
    }
  }

  resetParticleX(particle) {
    if (particle.x < this.x) {
      particle.resetPos(this.x - particle.radius - 1, particle.y);
    } else {
      particle.resetPos(this.x + particle.radius + 1, particle.y);
    }
  }

  intersectHelperY(particle) {
    return Math.abs(particle.y - this.y) <= particle.radius
      && particle.x + particle.radius >= this.x // particle's right-most point >= left end of line
      && particle.x - particle.radius <= this.x + this.dx; // particle's left-most point <= right end of line
  }

  intersectHelperX(particle) {
    return Math.abs(particle.x - this.x) <= particle.radius
      && particle.y + particle.radius >= this.y // particle's bottoom-most point >= top end of line
      && particle.y - particle.radius <= this.y + this.dy; // particle's top-most point <= bottom end of line
  }

  intersects(particle) {
    if (particle.layer === this.layer) {
      if (this instanceof HorizontalEdge && this.intersectHelperY(particle)
      ) {
        if (particle instanceof Projectile) {
          particle.reverseDir(1, -1);
          particle.decrBounces();
        } else {
          this.resetParticleY(particle);
          particle.reverseDir(1, -0.7);
        }
        return true;
      } else if (this instanceof VerticalEdge && this.intersectHelperX(particle)
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
  }

}
