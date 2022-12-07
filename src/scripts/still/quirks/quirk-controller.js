
export default class QuirkController {
  quirks = [];

  constructor(ctx) {
    this.ctx = ctx;
  }

  update() {
    this.quirks.forEach((quirk) => quirk.update());
  }

  delete () {
    this.quirks.splice(this.quirks.indexOf(quirk), 1);
  }

  collideWith(player) {
    return this.quirks.some(quirk => {
      if (quirk.collideWith(player)) {
        quirk.giveToPlayer(player);
        this.delete(quirk);
        return true;
      } else {
        return false;
      }
    });
  }

}
