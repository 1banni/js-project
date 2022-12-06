/** @type {HTMLCanvasElement} */

// Key Handler & Util
import { KeyHandler } from "../still/key-handler.js";
import { Util } from "../still/util";

// Constants / Parameters
import { PLAYER_PARAMS, PLAYER_COLORS } from "../game-parameters/player-params.js";
import { PROJECTILE } from "../game-parameters/projectile-params.js";
import { DIM_X, DIM_Y, MAP_BORDER, PLATFORMS } from "../game-parameters/map-params.js";

// Classes
import Heart from "./heart.js";

export default class Player {
  constructor(idx, pos, angle, color, edgeController, projectileController) {
    // params: passed in
    this.idx = idx;
    this.x = pos[0];
    this.y = pos[1];
    this.angle = angle;
    this.speed = 0;
    this.color = color;
    this.edgeController = edgeController;
    this.projectileController = projectileController;

    // params: default
    this.alive = true;
    this.layer = 0;


    // params: set by constant
    this.max_speed = PLAYER_PARAMS.MAX_SPEED;
    this.acceleration = PLAYER_PARAMS.ACCELERATION;
    this.radius = PLAYER_PARAMS.RADIUS;
    this.projectiles = PLAYER_PARAMS.PROJECTILES;
    this.heart = new Heart(PLAYER_PARAMS.MAX_HEALTH, PLAYER_PARAMS.MAX_HEALTH,
      this.color, this.idx);
      this.nitrous = PLAYER_PARAMS.MAX_NOS;

      // instantiate key handler and add event listeners for keyboard actions
    this.keyHandler = new KeyHandler();
    document.addEventListener('keydown', (e) => this.keyHandler.keyPressed(e));
    document.addEventListener('keyup', (e) => this.keyHandler.keyReleased(e));
  }

  update () {
    this.runKeys();
    let [velX, velY] = Util.scale(Util.directionFrom(this.angle), this.speed);
    [this.x, this.y] = [this.x + velX, this.y + velY];

    // if (this.alive) {
      // [this.x, this.y] = CourseMap.inbound(this.x + velX, this.y + velY, this.radius, this.radius);
    // }
    this.updateLayer();
    // PROOF100 UPDATE LAYER
  }

  updateLayer () {
    let prevLayer = this.layer;
    // outer if checks x location; inner width checks y location
    if (this.x > PLATFORMS[0][0] && this.x < PLATFORMS[0][0] + MAP_BORDER.PLATFORM_WIDTH) {
      if (this.y > PLATFORMS[0][1] && this.y < PLATFORMS[0][1] + MAP_BORDER.PLATFORM_HEIGHT) {
        this.layer = 1;
      } else if (this.y > PLATFORMS[1][1] && this.y < PLATFORMS[1][1] + MAP_BORDER.PLATFORM_HEIGHT) {
        this.layer = 1;
      }
    } else if (this.x > PLATFORMS[2][0] && this.x < PLATFORMS[2][0] + MAP_BORDER.PLATFORM_WIDTH) {
      if (this.y > PLATFORMS[0][1] && this.y < PLATFORMS[0][1] + MAP_BORDER.PLATFORM_HEIGHT) {
        this.layer = 1;
      } else if (this.y > PLATFORMS[1][1] && this.y < PLATFORMS[1][1] + MAP_BORDER.PLATFORM_HEIGHT) {
        this.layer = 1;
      }
    }

    // if below or above top/bottom of platforms, set layer to zero
    if (this.y < PLATFORMS[0][1] || this.y > PLATFORMS[1][1] + MAP_BORDER.PLATFORM_HEIGHT) this.layer = 0;

    // PROOF - Delete, for debugging
    if (this.layer !== prevLayer) {
      console.log(`${this.constructor.name} ${this.idx}'s layer changed from ${prevLayer} to ${this.layer}`);
    }
  }

  runKeys() {
    let pressedKeys = (this.alive ? this.keyHandler.activeActions()[this.idx] : {});

    if (pressedKeys.left) this.angle = (this.angle + 1 / PLAYER_PARAMS.TURN_RADIUS) % 360;
    if (pressedKeys.right) this.angle = (this.angle - 1 / PLAYER_PARAMS.TURN_RADIUS) % 360;
    if (pressedKeys.blast) this.fireBlasters();

    if (pressedKeys.throttle) {
      this.speed = Math.min(this.max_speed, this.speed + PLAYER_PARAMS.ACCELERATION);
    } else if (this.speed > 0) {
      this.speed = Math.floor(this.speed * 49 / 50 * 10) / 10;
    }

    if (pressedKeys.brake) {
      this.speed = Math.max(-this.max_speed, this.speed - PLAYER_PARAMS.ACCELERATION * 1);
    } else if (this.speed < 0) {
      this.speed = Math.ceil(this.speed * 49 / 50 * 10) / 10;
    }
  }

  damage(points) {
    this.heart.damage(points);
    if (this.heart.health <= 0) {
      this.alive = false;
      this.x = DIM_X + 100;
      this.y = DIM_Y + 100;
    }
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
    let [dx, dy] = Util.scale(Util.directionFrom(this.angle), PLAYER_PARAMS.RADIUS);
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = this.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + dx, this.y + dy);
    ctx.stroke();
  }

  drawHeart(ctx) {
    this.heart.draw(ctx);
  }

  drawLayer(ctx, layer) {
    if (this.layer === layer) {
      this.drawHeart(ctx);
      if (this.alive) {
        this.drawPlayer(ctx);
        this.drawLine(ctx);
      }
    }
  }

  // draw(ctx) {
  //   this.drawHeart(ctx);
  //   if (this.alive) {
  //     this.drawPlayer(ctx);
  //     this.drawLine(ctx);
  //   }
  // }

  fireBlasters() { // PROOF equiv to shoot
    if (this.alive && this.projectiles > 0) {
      this.projectiles--;
      this.projectileController.shoot(this.x, this.y, this.angle, this.layer, PROJECTILE.SPEED, PROJECTILE.DAMAGE, PROJECTILE.DELAY);
    }
  }

  resetY (newY) {
    this.y = newY;
  }

  reverseDY () {
    this.dy = this.dy * -0.6;
  }

}
