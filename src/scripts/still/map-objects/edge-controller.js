import VerticalEdge from "./vertical-edge";
import HorizontalEdge from "./vertical-edge";
import { MAP_COLOR, MAP_BORDER, PLATFORMS, DIM_X, DIM_Y } from "../../game-parameters/map-params";

export default class EdgeController {
  edges = [];

  constructor(ctx) {
    this.ctx = ctx;
    this.create();
  }

  draw(ctx) {
    this.edges.forEach(edge => edge.draw(ctx));
  }

  create() {
    this.createBorder();
  }

  createBorder() {
    let leftBorder = new VerticalEdge(
      MAP_BORDER.WALL_PADDING,
      MAP_BORDER.WALL_PADDING,
      0,
      DIM_Y - 2 * MAP_BORDER.WALL_PADDING,
      '#aa5555' // MAP_COLOR.BORDER);
    );

    let rightBorder = new VerticalEdge(DIM_X - MAP_BORDER.WALL_PADDING,
      MAP_BORDER.WALL_PADDING,
      0,
      DIM_Y - 2 * MAP_BORDER.WALL_PADDING,
      '#aa5555' // MAP_COLOR.BORDER);
    );

    let topBorder = new VerticalEdge(
      MAP_BORDER.WALL_PADDING,
      MAP_BORDER.WALL_PADDING,
      DIM_X - 2 * MAP_BORDER.WALL_PADDING,
      0,
      '#aa5555' // MAP_COLOR.BORDER);
    );


    this.edges.push(leftBorder);
    this.edges.push(rightBorder);

  }

  intersects(particle) {
    this.edges.forEach( edge => edge.intersects(particle));
  }
}
