/** @type {HTMLCanvasElement} */
import {MAP_COLOR, MAP_BORDER, PLATFORMS, PLATFORM_BORDER_WIDTH, DIM_X, DIM_Y } from "../game-parameters/map-params.js";
import EdgeController from "./map-objects/edge-controller.js";
import Edge from "./map-objects/edge.js";

export default class CourseMap {
  constructor(ctx) {
    // this.ctx = canvas.getContext("2d");
    this.dims = {width: DIM_X, height: DIM_Y}; // Map Dimensions (container for players/objects)
    this.wallBumper =   MAP_BORDER.WALL_PADDING + (  MAP_BORDER.WALL_WIDTH / 2);

  }

  draw(ctx) {
    // Color Canvas
    this.drawCanvas(ctx);
    // this.drawMap(ctx);
    // this.drawPlatforms(ctx);
  }

  drawCanvas(ctx) {
    ctx.fillStyle = MAP_COLOR.BORDER;
    ctx.fillRect(0, 0, this.dims.width, this.dims.height);
    // edges.forEach(edge => EdgeController.addEdge(edge));
  }

  drawMap (ctx) {
    ctx.fillStyle = MAP_COLOR.GROUND;
    ctx.shadowBlur = 0;
    ctx.fillRect( MAP_BORDER.WALL_PADDING, MAP_BORDER.WALL_PADDING,
                  this.dims.width - MAP_BORDER.WALL_PADDING * 2,
                  this.dims.height - MAP_BORDER.WALL_PADDING * 2 );
  }

  drawPlatforms (ctx) {
    // '#ffffff'
    ctx.strokeWidth = 5;
    PLATFORMS.forEach( loc => {
      // draw outline
      ctx.fillStyle = MAP_COLOR.PLATFORMS;
      ctx.fillRect(loc[0], loc[1],
        MAP_BORDER.PLATFORM_WIDTH,
        MAP_BORDER.PLATFORM_HEIGHT);

      // draw inner portion
      ctx.fillStyle = MAP_COLOR.GROUND;
      ctx.fillRect(loc[0] + PLATFORM_BORDER_WIDTH, // START X
                    loc[1] + PLATFORM_BORDER_WIDTH, // START Y
                    MAP_BORDER.PLATFORM_WIDTH - 2 * PLATFORM_BORDER_WIDTH, // END Y
                    MAP_BORDER.PLATFORM_HEIGHT - 2 * PLATFORM_BORDER_WIDTH); // END X

      // PROOF - ADD EDGES TO EDGE-CONTROLLER
    });
  }

  static inbound(x, y, width, height) {
    // console.log('pre-inbound', x, y);
    if (x < 50 + width) {
      x = 50 + width;
    } else if (x > 1150 - width) {
      x = 1150 - width;
    }

    if (y < 50 + height) {
      y = 50 + height;
    } else if (y > 750 - height) {
      y = 750 - height;
    }
    // console.log('post-inbound', x, y);
    return [x, y];
  }

}
