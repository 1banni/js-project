/** @type {HTMLCanvasElement} */
import { MAP_COLOR, MAP_BORDER, BRIDGES, PLATFORM_BORDER_WIDTH, DIM_X, DIM_Y } from "../game-parameters/map-params.js";
import EdgeController from "./map-objects/edge-controller.js";
import Edge from "./map-objects/edge.js";

export default class CourseMap {
  constructor() {
  //   // this.ctx = canvas.getContext("2d");
  //   // this.dims = {width: DIM_X, height: DIM_Y}; // Map Dimensions (container for players/objects)
  //   // this.wallBumper =   MAP_BORDER.WALL_PADDING + (  MAP_BORDER.WALL_WIDTH / 2);
  }

  draw(ctx) {
    // Color Canvas
    this.drawCanvas(ctx);
    this.drawBorder(ctx);
    // this.drawBridges(ctx);
  }

  drawCanvas(ctx) {
    ctx.fillStyle = MAP_COLOR.BORDER;
    ctx.fillRect(0, 0, DIM_X, DIM_Y);
    // edges.forEach(edge => EdgeController.addEdge(edge));
  }

  drawBorder (ctx) {
    ctx.fillStyle = MAP_COLOR.GROUND;
    ctx.shadowBlur = 0;
    ctx.fillRect( MAP_BORDER.WALL_PADDING, MAP_BORDER.WALL_PADDING,
                  DIM_X - MAP_BORDER.WALL_PADDING * 2,
                  DIM_Y - MAP_BORDER.WALL_PADDING * 2 );
  }

  drawBridges(ctx) {
    let arr1 = BRIDGES.HORIZONTAL[0];
    let x1 = arr1[0];
    let y1 = arr1[1];
    let dx1 = BRIDGES.HORIZONTAL_WIDTH;
    let dy1 = BRIDGES.HORIZONTAL_HEIGHT;

    let arr2 = BRIDGES.VERTICAL[0];
    let x2 = arr2[0];
    let y2 = arr2[1];
    let dx2 = BRIDGES.VERTICAL_WIDTH;
    let dy2 = BRIDGES.VERTICAL_HEIGHT;

    let arr3 = BRIDGES.VERTICAL[1];
    let x3 = arr3[0];
    let y3 = arr3[1];
    let dx3 = BRIDGES.VERTICAL_WIDTH;
    let dy3 = BRIDGES.VERTICAL_HEIGHT;

    ctx.fillStyle = 'rgba(125, 200, 200, 0.5)'; //'#118888'"
    ctx.fillRect(x1, y1, dx1, dy1);
    ctx.fillRect(x2, y2, dx2, dy2);
    ctx.fillRect(x3, y3, dx3, dy3);
  }

  // drawPlatforms (ctx) {
  //   // '#ffffff'
  //   ctx.strokeWidth = 5;
  //   PLATFORMS.forEach( loc => {
  //     // draw outline
  //     ctx.fillStyle = MAP_COLOR.PLATFORMS;
  //     ctx.fillRect(loc[0], loc[1],
  //       MAP_BORDER.PLATFORM_WIDTH,
  //       MAP_BORDER.PLATFORM_HEIGHT);

  //     // draw inner portion
  //     ctx.fillStyle = MAP_COLOR.GROUND;
  //     ctx.fillRect(loc[0] + PLATFORM_BORDER_WIDTH, // START X
  //                   loc[1] + PLATFORM_BORDER_WIDTH, // START Y
  //                   MAP_BORDER.PLATFORM_WIDTH - 2 * PLATFORM_BORDER_WIDTH, // END Y
  //                   MAP_BORDER.PLATFORM_HEIGHT - 2 * PLATFORM_BORDER_WIDTH); // END X

  //     // PROOF - ADD EDGES TO EDGE-CONTROLLER
  //   });
  // }

  static inbound(x, y, width, height, alive) {
    if (!alive) return [x,y];

    let x0 = MAP_BORDER.WALL_PADDING;
    let y0 = MAP_BORDER.WALL_PADDING;
    let x1 = DIM_X - MAP_BORDER.WALL_PADDING;
    let y1 = DIM_Y - MAP_BORDER.WALL_PADDING;
    // console.log('pre-inbound', x, y);
    if (x < x0 + width) {
      x = x0 + width;
    } else if (x > x1 - width) {
      x = x1 - width;
    }

    if (y < y0 + height) {
      y = y0 + height;
    } else if (y > y1 - height) {
      y = y1 - height;
    }
    // console.log('post-inbound', x, y);
    return [x, y];
  }

}
