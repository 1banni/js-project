import {Util} from "../fixed/util.js"

// PROOF: DELETE THIS LINE AND ITS DEPENDENTS
let logCount = 0
let logCon = 1000;


export default class Motion {
  constructor (options) {
    this.pos = options.pos;
    this.color = options.color;
    this.radius = options.radius;
    // console.log(options);
    // console.log(options.vel);
    this.vel = options.vel;
    this.max_speed = options.max_speed;
    this.dir = options.dir;
  }

  // PROOF: Potential Bug - Think about how you're passing context around
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius,
      0, 2 * Math.PI, false);
    ctx.fill();
  }

  update() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.inbounds(this.pos);
  }

  inbounds(pos) {
    if (pos[0] < 50 + this.radius) {
      pos[0] = 50 + this.radius;
    } else if (pos[0] > 1150 - this.radius) {
      pos[0] = 1150 - this.radius;
    }

    if (pos[1] < 50 + this.radius) {
      pos[1] = 50 + this.radius;
    } else if (pos[1] > 750 - this.radius) {
      pos[1] = 750 - this.radius;
    }
    return pos;
  }

  setVelocity(dir) {
    dir = Util.dir(dir);

    this.vel = Util.scale(dir, this.max_speed);


    // Normalize direction vector then scale by player's max_speedd
    // this.vel = Util.scale(Util.norm(dir), this.max_speed);
    // let normDir = Util.dir(dir);
    // console.log('normDir',normDir);
    // this.vel = Util.scale(normDir, this.max_speed)
    // if (logCount <= 1) {
    //   console.log('setVel dir', dir);
    // }

    // if (logCount++ % logCon === 0)  {
    //   console.log('setVel this.vel', this.vel);
    //   console.log('setVel dir', dir);
    // }
  }

}
