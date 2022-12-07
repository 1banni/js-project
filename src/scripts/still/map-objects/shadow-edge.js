import Edge from "./edge";


export default class ShadowEdge extends Edge {
  constructor(x, y, dx, dy, layer, color) {
    super(x, y, dx, dy, layer, color); // PROOF NOTE: MAY NEED TO ADD PARAMS HERE
  }

  draw(ctx) {}
}
