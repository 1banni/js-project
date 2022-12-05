/** @type {HTMLCanvasElement} */


import { KeyHandler } from "../still/key-handler.js";
import { Util } from "../still/util";
import { PLAYER } from "../game-parameters/player-params.js";
import CourseMap from "../still/course-map.js";

/* PROOF NOTE:
    - DON'T MODIFY THESE CONSTANTS TO IMPLEMENT FUNCTIONALITY.
    - INSTEAD, ADD MORE FUNCTIONALITY VIA MORE CONSTANTS AND CTRL FLOW.

    - RENAME PC TO BE player (all caps)
*/


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
    this.max_speed =PLAYER.MAX_SPEED;
    this.acceleration = PLAYER.ACCELERATION;
    this.radius = PLAYER.RADIUS;
    this.color = color;
    this.projectiles = PLAYER.PROJECTILES;
    this.projectileController = projectileController;
    this.health = PLAYER.MAX_HEALTH;
    this.nitrous =PLAYER.MAX_NOS;

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
    ctx.closePath();

    let vector = Util.scale(Util.directionFrom(this.angle), PLAYER.RADIUS);
    ctx.strokeStyle = '#FFFFFF';
    ctx.fillStyle = this.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    // ctx.lineTo(400, 400);
    ctx.lineTo(this.x + vector[0], this.y + vector[1]);
    ctx.stroke();

  }

  

  fireBlasters() { // PROOF equiv to shoot
    // console.log('shoot');
    if (this.projectiles > 0) {
      this.projectiles--;
      // let x = this.x + PLAYER.RADIUS; // PROOF - FIX THIS - BASE ON PLAYER DIRECTION
      // let y = this.y + PLAYER.RADIUS;// + PLAYER.RADIUS;
      this.projectileController.shoot(this.x, this.y, this.angle, PROJECTILE.SPEED, PROJECTILE.DAMAGE, PROJECTILE.DELAY);
    }
    // console.log('projX', x, 'projY', y);

    // let dir = Util.dir(this.vel);
    // let proj = new Projectile(this.pos, dir);
  }

  update () {
    this.runKeys();
    let [velX, velY] = Util.scale(Util.directionFrom(this.angle), this.speed);
    [this.x, this.y] = CourseMap.inbound(this.x + velX, this.y + velY, this.radius, this.radius);
  }

  runKeys() {
    let pressedKeys = this.keyHandler.activeActions()[this.idx];

    if(pressedKeys.left) this.angle = (this.angle - 1 / PLAYER.TURN_RADIUS) % 360;
    if (pressedKeys.right) this.angle = (this.angle + 1 / PLAYER.TURN_RADIUS) % 360;
    if (pressedKeys.blast) this.fireBlasters();

    if (pressedKeys.throttle) {
      // console.log('updating throttle');
      this.speed = Math.min(this.max_speed, this.speed + PLAYER.ACCELERATION);
    } else if (this.speed > 0) {
      this.speed = Math.floor(this.speed * 49 / 50 * 10) / 10;
    }

    if (pressedKeys.brake) {
      // if brake is pressed, speed becomes greater of -
      this.speed = Math.max(-this.max_speed, this.speed - PLAYER.ACCELERATION * 1);
    } else if (this.speed < 0) {
      // if break is
      this.speed = Math.ceil(this.speed * 49 / 50 * 10) / 10;
    }
  }

  // handleEdges(width, height) {
  //   if (this.x <= 0 || this.pos.x >= width) {
  //     // convert angle to velocity or direction,
  //     // flip x component
  //     // convert back to angle
  //     // thisad
  //   }
  // }


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
