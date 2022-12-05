


export default class HealthMeter {
  constructor(x, y, w, h, maxHealth) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxHealth = maxHealth;
    this.health = ['TBU']; // PROOF
    this.color = '#10cd10';
  }

  draw(ctx) {
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#aa3333';
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.maxWidth, this.h);
  }
}

// this code was placed in his index.js file
let health 

const healthBar = new Health(20, 20, 50, 30, 100, "green");

const frame = function() {
  co
}
