


export default class Edge {
  constructor(x, y, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    // this.type = (this.dx === 0
    //               ? 'vertical'
    //               : this.dy === 0
    //                 ? 'horizontal'
    //                 : 'diagonal' );
  }

  draw(ctx) {
    console.log('in the money');
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.dx, this.y + this.dy);
    ctx.stroke();
  }




  // Figure out which side of edge the particle is on
  sideOf(particle) {

  }

}
