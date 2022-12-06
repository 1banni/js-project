export default class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.addEdges();
  }

  getEdges() {
    let edges = [
      { start: [this.x, this.y], stop: [this.x + this.width, this.y], edgeType: horizontal },
      { start: [this.x, this.y + this.height], stop: [this.x + this.width, this.y + this.height], edgeType: horizontal },
      { start: [this.x, this.y], stop: [this.x, this.y + this.height], edgeType: vertical },
      { start: [this.x + this.width, this.y], stop: [this.x + this.width, this.y + this.height], edgeType: vertical },
    ]

    return edges;
  }

  drawCanvas(ctx, options) {
    ctx.fillStyle = color;
    ctx.fillRect(options.x, options.y, options.width, options.height);
  }

}
