/** @type {HTMLCanvasElement} */

const CON = {
  WALL_PADDING: 50,
  PLATFORM_WIDTH: 300,
  PLATFORM_HEIGHT: 200,
}

const LOC = {
  PLATFORMS: [
    [200, 150],
    [200, 450],
    [700, 150],
    [700, 450],
    // [200, 500],
  ],
}

const COLOR = {
  BORDER: '#888888', // light grey
  GROUND: '#000000',
  PLATFORMS: '#888888'
}

export default class CourseMap {
  constructor(canvas) {
    // this.ctx = canvas.getContext("2d");
    this.dims = {width: canvas.width, height: canvas.height}; // Map Dimensions (container for players/objects)
    this.wallBumper = CON.WALL_PADDING + (CON.WALL_WIDTH / 2);
  }

  draw(ctx) {
    // Color Canvas
    this.drawCanvas(ctx);
    this.drawMap(ctx);
    this.drawPlatforms(ctx);
    this.drawBridges(ctx);
  }


  drawCanvas(ctx) {
    ctx.fillStyle = COLOR.BORDER;
    ctx.fillRect(0, 0, this.dims.width, this.dims.height);
  }

  drawMap (ctx) {
    ctx.fillStyle = COLOR.GROUND;
    ctx.shadowBlur = 0;
    ctx.fillRect(CON.WALL_PADDING, CON.WALL_PADDING,
                 this.dims.width - CON.WALL_PADDING * 2,
                 this.dims.height - CON.WALL_PADDING * 2);
  }

  drawPlatforms (ctx) {
    ctx.fillStyle = COLOR.PLATFORMS;
    ctx.strokeStyle = '#ffffff';
    ctx.strokeWidth = 5;
    LOC.PLATFORMS.forEach( loc => {
      // console.log('loc[0]', loc[0]);
      // console.log('loc[1]', loc[1]);
      // console.log('endx', loc[0] + CON.PLATFORM_WIDTH);
      // console.log('endy', loc[1] + CON.PLATFORM_HEIGHT);
      ctx.fillRect(loc[0], loc[1],
                   CON.PLATFORM_WIDTH,
                   CON.PLATFORM_HEIGHT);
    });
  }

  drawBridges (ctx) {
    // TBU (PROOF)
  }

  static inbounds(pos, width, height) {
    if (pos[0] < 50 + this.radius) {
      pos[0] = 50 + this.radius;
    } else if (pos[0] > 1150 - this.radius) {
      pos[0] = 1150 - this.radius;
    }

    if (pos[1] < 50 + this.radius) {
      pos[1] = 50 + this.radius;
    } else if (pos[1] > 750 - this.radius) {
      pos[1] = 750 - this.radius;
    }
    return pos;
  }

}
