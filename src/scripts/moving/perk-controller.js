import Perk from "./perk";
import { MAP, PERK } from "../game-params";
import { Util } from "../still/util";

export default class PerkController {
  perks = [];

  // PROOF - fix this to be an option hash
  constructor(option) {
    // this.ctx = ctx;
    this.numMedpaks = option.MEDPAKS;
    this.numProjectiles = option.AMMO;
    this.numNos = option.NOS;
    // let [numMedpaks, numProjectiles] = option;
    this.heartImg = new Image();
    this.heartImg.src = '../src/img/heart.png';
    this.projImg = new Image();
    this.projImg.src = '../src/img/greenbars.png';
    // this.addHeart.
    this.generatePerks();
  }

  generatePerks () {
    let params = [this.numMedpaks, this.numProjectiles, this.numNos];
    params.forEach( (param, idx) => {
      let tik = 0;
      while (tik++ < param) {
        this.addPerk(idx);
      }
    });
  }

  update() {
    this.perks = this.perks.filter((perk) => perk.decrFrames() > 0);
  }

  delete (perk) {
    this.perks.splice(this.perks.indexOf(perk), 1);
  }

  deleteAtIndex (idx) {
    this.perks.splice(idx, 1);
  }

  collideWith(player) {
    return this.perks.some( (perk, idx) => {
      if (perk.collideWith(player)) {
        player.givePerk(perk.type);
        this.deleteAtIndex(perk, idx);
        return true;
      } else {
        return false;
      }
    });
  }

  addPerk(type) {
    let x1 = MAP.BORDER_WIDTH;
    let y1 = MAP.BORDER_WIDTH;
    let width = MAP.DIM_X - MAP.BORDER_WIDTH * 2;
    let height = MAP.DIM_Y - MAP.BORDER_WIDTH * 2;
    let spacing = (type === 0
      ? PERK.HEART.SIZE
      : (type === 1
        ? PERK.PROJ.SIZE
        : PERK.NOS.SIZE)
    );

    let [x,y] = Util.randomCoords(x1, y1, width, height, spacing);;

    while (((x >= 200 - spacing && x <= 400 + spacing) || (x >= 700 - spacing && x <= 900 + spacing))
      && ((y >= 150 - spacing && y <= 350) || (y >= 450 - spacing && y <= 650)))
    {
      Util.randomCoords(x1, y1, width, height, spacing);
    }

    this.perks.push(new Perk(x, y, type));
  }

  addProj () {
    let [x, y] = Util.generateCoords(PERK.PROJ.SIZE);
    this.perks.push(new Perk(x, y, 1));
  }

  addHeart () {
    let [x, y] = Util.generateCoords(PERK.HEART.SIZE);
    this.perks.push(new Perk(x, y, 0));
  }

  draw(ctx) {
    this.perks.forEach( perk => {
      if (perk.type === 0) { // medpak / heart
        ctx.drawImage.bind(ctx)(this.heartImg, perk.x, perk.y, PERK.HEART.SIZE, PERK.HEART.SIZE);
      }
      else if (perk.type === 1) { // reload
        ctx.drawImage.bind(ctx)(this.projImg, perk.x, perk.y, PERK.PROJ.SIZE, PERK.PROJ.SIZE);
      }
    });

  }

}
