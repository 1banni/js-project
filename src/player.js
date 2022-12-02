const CON = {
  MAX_HEALTH: 100,
  MAX_SPEED: 5,
  RADIUS: 10,
  MAX_NOS: 40,
  // TURN_RADIUS: 3;
}



export default class Player {
  constructor(pos, color) {
    this.pos = pos;
    this.color = color;
    this.radius = CON.RADIUS;
    this.health = CON.MAX_HEALTH;
    this.nitrous = CON.MAX_NOS;
    this.speed = 0;
    this.direction = 0;
  }


  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    // ctx.clearRect(0, 0, DIM_X, DIM_Y);
    // ctx.fillStyle = '#339933';
    // ctx.fillRect(0, 0, DIM_X, DIM_Y);

    /********** PROOF: TEST CODE **********/
    console.log(this);
    console.log(this.pos);
    console.log(this.pos[0]);
    console.log(this.pos[1]);
    /********** PROOF: TEST CODE **********/

    ctx.arc(this.pos[0], this.pos[1], this.radius,
            0, 2 * Math.PI, false);

    ctx.fill();
  }
}
