/** @type {HTMLCanvasElement} */

const CON = {
  WALL_PADDING: 25,
  WALL_WIDTH: 50,
}

export default class CourseMap {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dims = {width: canvas.width, height: canvas.height}; // Map Dimensions (container for players/objects)
    this.wallBumper = CON.WALL_PADDING + (CON.WALL_WIDTH / 2);
  }

  draw(ctx) {
    this.drawWalls(ctx);
    this.drawPlatforms(ctx);
    this.drawBridges(ctx);
  }

  drawWalls (ctx) {
    ctx.strokeStyle = '#753b2b';
    // ctx.strokeStyle = '#deda12';
    ctx.lineWidth = CON.WALL_WIDTH;

    //  = 20;
    // console.log(ctx.strokeStyle);

    ctx.beginPath();
    ctx.moveTo(CON.WALL_PADDING, CON.WALL_PADDING);
    ctx.lineTo(this.dims.width - CON.WALL_PADDING, CON.WALL_PADDING);
    ctx.lineTo(this.dims.width - CON.WALL_PADDING, this.dims.height - CON.WALL_PADDING);
    ctx.lineTo(CON.WALL_PADDING, this.dims.height - CON.WALL_PADDING);
    ctx.lineTo(CON.WALL_PADDING, (CON.WALL_PADDING - ctx.lineWidth / 2));
    ctx.stroke();
  }

  drawPlatforms (ctx) {
    //  TBU (PROOF)
  }

  drawBridges (ctx) {
    // TBU (PROOF)
  }


}
