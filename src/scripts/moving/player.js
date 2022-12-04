/** @type {HTMLCanvasElement} */


import Projectile from "../moving/projectile.js"; // PROOF
import { KeyHandler } from "../still/key-handler.js";
import { Util } from "../still/util";
import CourseMap from "../still/course-map.js";
/* PROOF NOTE:
    - DON'T MODIFY THESE CONSTANTS TO IMPLEMENT FUNCTIONALITY.
    - INSTEAD, ADD MORE FUNCTIONALITY VIA MORE CONSTANTS AND CTRL FLOW.

    - RENAME PC TO BE player (all caps)
*/
const PC = {
  MAX_HEALTH: 100,
  MAX_SPEED: 4, // PROOF this isn't hitting cause setVelo isn't complete
  RADIUS: 20,
  TURN_RADIUS: 0.5,
  ACCELERATION: 0.01,

  // PROJECTILES: 10,
  // MAX_NOS: 40,
  // TURN_RADIUS: 3;
}

const PROJECTILE = {
  SPEED: 5,
  DELAY: 25,
  DAMAGE: 1,
}
// PROOF

export default class Player {
  constructor(idx, pos, angle, color, projectileController) {
    // Starter Values
    this.idx = idx;
    this.x = pos[0];
    this.y = pos[1];
    this.angle = angle;
    this.speed = 0;
    this.max_speed = PC.MAX_SPEED;
    this.radius = PC.RADIUS;
    this.color = color;
    this.projectileController = projectileController;
    this.health = PC.MAX_HEALTH;
    this.nitrous = PC.MAX_NOS;

    // window.addEventListener('keydown', (e) => console.log(e.key));
    // Event listener for keyboard actionso
    this.keyHandler = new KeyHandler();
    document.addEventListener('keydown', (e) => this.keyHandler.keyPressed(e));
    document.addEventListener('keyup', (e) => this.keyHandler.keyReleased(e));

  }


  draw(ctx) {
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 30;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius,
      0, 2 * Math.PI, false);
    ctx.fill();

    let vector = Util.scale(Util.directionFrom(this.angle), PC.RADIUS);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    // ctx.lineTo(400, 400);
    ctx.lineTo(this.x + vector[0], this.y + vector[1]);
    ctx.stroke();

  }

  fireBlasters() { // PROOF equiv to shoot
    // console.log('shoot');
    let x = this.x + PC.RADIUS; // PROOF - FIX THIS - BASE ON PLAYER DIRECTION
    let y = this.y + PC.RADIUS;// + PC.RADIUS;

    // console.log('projX', x, 'projY', y);
    this.projectileController.shoot(x, y, PROJECTILE.SPEED, PROJECTILE.DAMAGE, PROJECTILE.DELAY);
    // let dir = Util.dir(this.vel);
    // let proj = new Projectile(this.pos, dir);
  }


  update () {
    let pressedKeys = this.keyHandler.activeActions()[this.idx];
    // PROOF TEST CODE
    console.log('pressedKeys');
    Util.infreqLog(pressedKeys);
    // END TEST COD

    let avgArr = Array.from(11, () => this.speed);
    avgArr.push(0);

    if (pressedKeys.throttle) {
      console.log('updating throttle');
      this.speed = Math.min(this.max_speed, this.speed + PC.ACCELERATION);
    } else if (this.speed > 0) {
      this.speed = avgArr.reduce((acc, el) => acc + el) / 12;
    }
    if (pressedKeys.brake) {
      this.speed = Math.max(-this.max_speed / 0.25, this.speed - PC.ACCELERATION * 3);
    } else if (this.speed < 0) {
      this.speed = avgArr.reduce((acc, el) => acc + el) / 12;
    }
    if (pressedKeys.left) this.angle = (this.angle - 1 / PC.TURN_RADIUS) % 360;
    if (pressedKeys.right) this.angle = (this.angle + 1 / PC.TURN_RADIUS) % 360;
    if (pressedKeys.blast) this.fireBlasters();



    // PROOF - ADD CODE TO LET PLAYER COME TO COMPLETE HAULT


    let vel = Util.scale(Util.directionFrom(this.angle), this.speed);
    Util.infreqLog(vel,'vel', -1);
    Util.infreqLog(this.angle,'this.angle', -1);
    Util.infreqLog(Util.directionFrom(this.angle, -1),'Util.directionFrom(this.angle)');
    Util.infreqLog(this.speed,'this.speed');
    this.x += vel[0];
    this.y += vel[1];
    [this.x, this.y] = CourseMap.inbounds([this.x, this.y]);
        // if (playerBlasters[idx]) PC.fireBlasters();
  }


  // setVelocity(dir) {


  //   // Normalize direction vector then scale by player's max_speedd
  //   // this.vel = Util.scale(Util.norm(dir), this.max_speed);
  //   // let normDir = Util.dir(dir);
  //   // console.log('normDir',normDir);
  //   // this.vel = Util.scale(normDir, this.max_speed)
  //   // if (logCount <= 1) {
  //   //   console.log('setVel dir', dir);
  //   // }

  //   // if (logCount++ % logCon === 0)  {
  //   //   console.log('setVel this.vel', this.vel);
  //   //   console.log('setVel dir', dir);
  //   // }
  // }
}
