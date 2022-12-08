import Perk from "./perk";
import { PERK } from "../game-parameters/perk-params";
import { Util } from "../still/util";

export default class PerkController {
  perks = [];

  constructor(/* ctx */) {
    // this.ctx = ctx;
    this.heartImg = new Image();
    this.heartImg.src = '../src/img/heart.png';
    // this.addHeart.
    for (let i = 0; i < PERK.HEART.MAX_COUNT; i++) {
      this.addHeart();
    }
  }

  update() {
    this.perks = this.perks.filter((perk) => perk.decrFrames() > 0);
  }

  delete (perk) {
    this.perks.splice(this.perks.indexOf(perk), 1);
  }

  collideWith(player) {
    return this.perks.some(perk => {
      if (perk.collideWith(player)) {
        player.givePerk(this.type);
        this.delete(perk);
        return true;
      } else {
        return false;
      }
    });
  }



  addHeart () {
    let [x, y] = Util.generateCoords(PERK.HEART.SIZE);

    this.perks.push(new Perk(x, y, 0));
    console.log('this.perks', this.perks);
  }

  draw(ctx) {
    this.perks.forEach( perk => {
      if (perk.type) {
        // ctx.drawImage.bind(ctx)(this.projImg, 100, 100);
      } else {
        ctx.drawImage.bind(ctx)(this.heartImg, perk.x, perk.y, PERK.HEART.SIZE, PERK.HEART.SIZE);
      }
    });
    // let img = new Image();
    // img.src = '../src/img/heart.png';
    // let ctx = this.ctx;
    // img.onload = function () {
    // // (img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    // ctx.drawImage.bind(ctx)(this.img, 200, 200);
    // }
  }

}
