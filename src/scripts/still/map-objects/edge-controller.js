import VerticalEdge from "./vertical-edge";
import HorizontalEdge from "./horizontal-edge";
import { MAP_COLOR, MAP_BORDER, PLATFORMS, BRIDGES, DIM_X, DIM_Y } from "../../game-parameters/map-params";

export default class EdgeController {
  // Each subarray represents a layer/floor on the map
  edges = [];

  constructor(ctx) {
    this.ctx = ctx;
    this.create();
  }

  drawLayer(ctx, layer) {
    this.edges.forEach( edge => {
      if (edge.layer === layer) {
        edge.draw(ctx)
      }
    });
  }

  // PROOF
  intersects(particle) {
    this.edges.forEach( edge => edge.intersects(particle));
  }

  create() {
    this.createBorder();
    this.createPlatforms();
    this.createBridges();
    // add more method calls
  }

  createBorder() {
    this.createRectangle(
      MAP_BORDER.WALL_PADDING,MAP_BORDER.WALL_PADDING,
      DIM_X - 2 * MAP_BORDER.WALL_PADDING, DIM_Y - 2 * MAP_BORDER.WALL_PADDING,
      0, MAP_COLOR.EDGES
    ); // MAP_COLOR.BORDER
  }

  createBridges () {
    let layer = 1;
    let color = MAP_COLOR.BRIDGES;
    let dx = BRIDGES.VERTICAL_WIDTH;
    let dy = BRIDGES.VERTICAL_HEIGHT;

    let [x, y] = BRIDGES.VERTICAL[0];
    this.createVerticalBridge(x, y, dx, dy, layer, color);

    [x, y] = BRIDGES.VERTICAL[1];
    this.createVerticalBridge(x, y, dx, dy, layer, color);

    // [x, y] = BRIDGES.HORIZONTAL[0];
    // createVerticalBridge(x, y, dx, dy, layer, color);

    // [x, y] = BRIDGES.HORIZONTAL[1];
    // createVerticalBridge(x, y, dx, dy, layer, color);



  }

  createPlatforms () {
    let gap = 75;
    let layer = 0;
    let color = MAP_COLOR.PLATFORMS;
    let dx = MAP_BORDER.PLATFORM_WIDTH;
    let dy = MAP_BORDER.PLATFORM_HEIGHT;

    let [x, y] = PLATFORMS[0];
    this.edges.push(new VerticalEdge(x, y, 0, dy, layer, color)); // left border
    this.edges.push(new VerticalEdge(x + dx, y, 0, dy, layer, color)); // right border
    this.edges.push(new HorizontalEdge(x + gap, y, dx - gap, 0, layer, color)); // top border
    this.edges.push(new HorizontalEdge(x, y + dy, dx, 0, layer, color)); // bottom border

    [x, y] = PLATFORMS[1];
    this.edges.push(new VerticalEdge(x, y, 0, dy, layer, color)); // left border
    this.edges.push(new VerticalEdge(x + dx, y, 0, dy, layer, color)); // right border
    this.edges.push(new HorizontalEdge(x, y, dx, 0, layer, color)); // top border
    this.edges.push(new HorizontalEdge(x + gap, y + dy, dx - gap, 0, layer, color)); // bottom border

    [x, y] = PLATFORMS[2];
    this.edges.push(new VerticalEdge(x, y, 0, dy, layer, color)); // left border
    this.edges.push(new VerticalEdge(x + dx, y, 0, dy, layer, color)); // right border
    this.edges.push(new HorizontalEdge(x, y, dx - gap, 0, layer, color)); // top border
    this.edges.push(new HorizontalEdge(x, y + dy, dx, 0, layer, color)); // bottom border

    [x, y] = PLATFORMS[3];
    this.edges.push(new VerticalEdge(x, y, 0, dy, layer, color)); // left border
    this.edges.push(new VerticalEdge(x + dx, y, 0, dy, layer, color)); // right border
    this.edges.push(new HorizontalEdge(x, y, dx, 0, layer, color)); // top border
    this.edges.push(new HorizontalEdge(x, y + dy, dx - gap, 0, layer, color)); // bottom border
  }

  createRectangle(x, y, dx, dy, layer, color) {
    this.edges.push(new VerticalEdge(x, y, 0, dy, layer, color)); // left border
    this.edges.push(new VerticalEdge(x + dx, y, 0, dy, layer, color)); // right border
    this.edges.push(new HorizontalEdge(x, y, dx, 0, layer, color)); // top border
    this.edges.push(new HorizontalEdge(x, y + dy, dx, 0, layer, color)); // bottom border
  }

  createVerticalBridge(x, y, dx, dy, layer, color) {
    this.edges.push(new VerticalEdge(x, y, 0, dy, layer, color)); // left border
    this.edges.push(new VerticalEdge(x + dx, y, 0, dy, layer, color)); // right border
    this.edges.push(new HorizontalEdge(x, y, dx, 0, -1, color)); // top border
    this.edges.push(new HorizontalEdge(x, y + dy, dx, 0, -1, color)); // bottom border
  }

  createHorizontalBridge(x, y, dx, dy, layer, color) {
    this.edges.push(new VerticalEdge(x, y, 0, dy, -1, color)); // left border
    this.edges.push(new VerticalEdge(x + dx, y, 0, dy, -1, color)); // right border
    this.edges.push(new HorizontalEdge(x, y, dx, 0, layer, color)); // top border
    this.edges.push(new HorizontalEdge(x, y + dy, dx, 0, layer, color)); // bottom border
  }


}
