/** @type {HTMLCanvasElement} */

import Motion from "./motion.js";
import Projectile from "./projectile.js";
import { Util } from "./util";


const CON = {
  MAX_HEALTH: 100,
  MAX_SPEED: 10, // PROOF this isn't hitting cause setVelo isn't complete
  RADIUS: 20,
  // MAX_NOS: 40,
  // TURN_RADIUS: 3;
}

export default class Player extends Motion {
  constructor(pos, color) {
    let options = {
      pos: pos,
      color: color,
      radius: CON.RADIUS,
      vel: [0,0],
      max_speed: CON.MAX_SPEED,
      // dir: 0,
    }
    super(options);

    this.health = CON.MAX_HEALTH;
    this.nitrous = CON.MAX_NOS;

    // window.addEventListener('keydown', (e) => console.log(e.key));
    // Event listener for keyboard actionso

  }


  draw(ctx) {
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 30;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius,
      0, 2 * Math.PI, false);
    ctx.fill();


  }

  fireBlasters() {
    console.log('shoot');
    const speed = 5;
    const delay = 7;
    const damage = 1;
    const bulletX = this.x + CON.RADIUS;
    const bulletY = this.y + CON.RADIUS;
    this.projectile.shoot(bulletX, bulletY, speed, damage, delay)

    // let dir = Util.dir(this.vel);
    // let proj = new Projectile(this.pos, dir);
  }



}
