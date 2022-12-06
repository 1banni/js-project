


export default class Edge {
  constructor(x, y, dx, dy, layer, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.layer = layer;
    this.color = color;
    // this.type = (this.dx === 0
    //               ? 'vertical'
    //               : this.dy === 0
    //                 ? 'horizontal'
    //                 : 'diagonal' );
  }

  draw(ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.dx, this.y + this.dy);
    ctx.stroke();
  }


}
