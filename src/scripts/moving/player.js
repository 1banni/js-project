/** @type {HTMLCanvasElement} */

// Key Handler & Util
import { KeyHandler } from '../still/key-handler.js';
import { Util } from '../still/util.js';

// Constant Parameters
import { MAP, PLAYER, PROJECTILE } from '../game-params.js';

// Classes
import Particle from './particle.js';
import PlayerHealth from './player-health.js';

export default class Player extends Particle {
  constructor(idx, pos, angle, color, edgeController, projectileController) {
    // params: passed in
    super(pos[0], pos[1], PLAYER.RADIUS);
    this.idx = idx;
    this.angle = angle;
    this.speed = 0;
    this.color = color;
    this.edgeController = edgeController;
    this.projectileController = projectileController;

    // params: default
    this.alive = true;
    this.layer = 0;

    // params: set by constant
    this.blasters = true;
    this.health = new PlayerHealth(PLAYER.MAX_HEALTH, this.color, this.idx);
    this.max_speed = PLAYER.MAX_SPEED;
    this.acceleration = PLAYER.ACCELERATION;
    this.projectiles = PLAYER.PROJECTILES;
    this.nitrous = PLAYER.MAX_NOS;

    // instantiate key handler and add event listeners for keyboard actions
    this.keyHandler = new KeyHandler();
    document.addEventListener('keydown', (e) => this.keyHandler.keyPressed(e));
    document.addEventListener('keyup', (e) => this.keyHandler.keyReleased(e));
  }

  update () {
    this.runKeys();
    let [velX, velY] = Util.scale(Util.directionFrom(this.angle), this.speed);
    [this.x, this.y] = Particle.inbound(this.x + velX, this.y + velY, this.radius, this.alive);
    this.updateLayer();
  }

  handleIntersect (x, y, edgeX, edgeY) {
    // if (edgeX) this.resetX(edgeX);
    // if (edgeY) this.resetY(edgeY);
    edgeX ? this.resetPos(edgeX, this.y) : this.resetPos(this.x, edgeY);
    this.reverseDir(x, y * -0.7);
  }

  runKeys() {
    let pressedKeys = (this.alive ? this.keyHandler.activeActions()[this.idx] : {});

    if (pressedKeys.left) this.angle = (this.angle + 1 / PLAYER.TURN_RADIUS) % 360;
    if (pressedKeys.right) this.angle = (this.angle - 1 / PLAYER.TURN_RADIUS) % 360;
    if (pressedKeys.blast) {
      // if statement prevents multiple fires on one key press
      if (this.blasters) {
        this.blasters = false;
        this.shoot();
      }
    } else {
      this.blasters = true;
    }

    if (pressedKeys.throttle) {
      this.speed = Math.min(this.max_speed, this.speed + PLAYER.ACCELERATION);
    } else if (this.speed > 0) {
      this.speed = Math.floor(this.speed * 49 / 50 * 10) / 10;
    }

    if (pressedKeys.brake) {
      this.speed = Math.max(-this.max_speed, this.speed - PLAYER.ACCELERATION * 1);
    } else if (this.speed < 0) {
      this.speed = Math.ceil(this.speed * 49 / 50 * 10) / 10;
    }
  }

  shoot() {
    if (this.alive && this.projectiles > 0) {
      this.projectiles--;
      this.projectileController.shoot(this.x, this.y, this.angle, this.layer, PROJECTILE.SPEED, PROJECTILE.DAMAGE);
    }
    console.log('this.projectiles', this.projectiles);
  }

  damage(points) {
    this.health.damage(points);
    if (this.health.health <= 0) {
      this.alive = false;
      this.x = MAP.DIM_X + 100;
      this.y = MAP.DIM_Y + 100;
    }
  }

  givePerk(type) {
    console.log('type', type);
    if (type === 0) this.health.restore(20);
    console.log('this.projectiles', this.projectiles);
    if (type === 1) this.projectiles += 2;
    console.log('this.projectiles', this.projectiles);
  }

  drawPlayer(ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = 'white';
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 30;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius,
      0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
    ctx.shadowBlur = 0;
  }

  drawLine(ctx) {
    let [dx, dy] = Util.scale(Util.directionFrom(this.angle), PLAYER.RADIUS);
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = this.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + dx, this.y + dy);
    ctx.stroke();
  }

  drawHealth(ctx) {
    this.health.draw(ctx);
  }

  drawLayer(ctx, layer) {
    if (this.layer === layer) {
      this.drawHealth(ctx);
      if (this.alive) {
        this.drawPlayer(ctx);
        this.drawLine(ctx);
      }
    }
  }

  resetPos (x, y) {
    this.x = x;
    this.y = y;
  }

  reverseDir(dxMult, dyMult) { // this.angle = Util.getAngle(this.dx, this.dy);
    this.dx = this.dx * dxMult;
    this.dy = this.dy * dyMult;

  }
}
