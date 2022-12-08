import Perk from "./perk";
import { PERK } from "../game-parameters/perk-params";
import { Util } from "../still/util";

export default class PerkController {
  perks = [];

  constructor(/* ctx */) {
    // this.ctx = ctx;
    this.heartImg = new Image();
    this.heartImg.src = '../src/img/heart.png';
    this.projImg = new Image();
    this.projImg.src = '../src/img/greenbars.png';
    // this.addHeart.
    for (let i = 0; i < PERK.HEART.MAX_COUNT; i++) {
      this.addHeart();
    }

    for (let i = 0; i < PERK.PROJ.MAX_COUNT; i++) {
      this.addProj();
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
        player.givePerk(perk.type);
        this.delete(perk);
        return true;
      } else {
        return false;
      }
    });
  }

  addProj () {
    let [x, y] = Util.generateCoords(PERK.PROJ.SIZE);
    this.perks.push(new Perk(x, y, 1));
    console.log('this.perks', this.perks);
  }

  addHeart () {
    let [x, y] = Util.generateCoords(PERK.HEART.SIZE);
    this.perks.push(new Perk(x, y, 0));
  }

  draw(ctx) {
    this.perks.forEach( perk => {
      if (perk.type) {
        ctx.drawImage.bind(ctx)(this.projImg, perk.x, perk.y, PERK.PROJ.SIZE, PERK.PROJ.SIZE);
      } else {
        ctx.drawImage.bind(ctx)(this.heartImg, perk.x, perk.y, PERK.HEART.SIZE, PERK.HEART.SIZE);
      }
    });

  }

}
