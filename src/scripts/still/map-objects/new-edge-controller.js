import { MAP_BORDER , DIM_X, DIM_Y, MAP_COLOR} from "../../game-parameters/map-params";
import NewEdge from "./new-edge";

export default class NewEdgeController {

  edges = [];

  constructor(ctx) {
    this.ctx = ctx;
    this.create();
  }

  drawCanvas(ctx) {
    let wp = MAP_BORDER.WALL_PADDING;

    ctx.fillStyle = MAP_COLOR.BORDER;
    ctx.fillRect(0, 0, DIM_X, DIM_Y);

    ctx.fillStyle = MAP_COLOR.GROUND;
    ctx.fillRect(wp, 0, DIM_X - 2 * wp, DIM_Y);
    // edges.forEach(edge => EdgeController.addEdge(edge));
  }

  drawLayer(ctx, layer) {
    this.edges.forEach(edge => {
      // only draw top most level of the layer
      if (Math.max(...edge.layers) === layer) edge.draw(ctx);
    });

    // only draw shade on layer 0 (not included in edges due to lack of
    // ... intersects / collision functionality)
    if (layer === 0) {
      this.drawShade(ctx, 275, 375, 300, 500, 500, 0, 'rgba(150, 255, 255, 0.8)');
      this.drawShade(ctx, 425, 725, 200, 275, 0, 325, 'rgba(150, 255, 255, 0.8)');
    }
  }

  intersects(particle) {
    this.edges.forEach(edge => edge.intersects(particle));
  }

  create() {
    this.createVert();
    this.createHori();
  }

  createVert () {
    let wallPad = MAP_BORDER.WALL_PADDING;
    // Left Border
    this.edges.push(new NewEdge(wallPad, 0, // x1, y1
      wallPad, DIM_Y, // x2, y2
      [0,1], MAP_COLOR.EDGES // layer, color
    ));
    // Right Border
    this.edges.push(new NewEdge(DIM_X - wallPad, 0, // x1, y1
      DIM_X - wallPad, DIM_Y, // x2, y2
      [0,1], MAP_COLOR.EDGES // layer, color
    ));
    // Platforms open
    for (let i = 200; i < 1200; i += 750) {
      this.edges.push(new NewEdge(i, 150, // x1, y1
        i, 350, // x2, y2
        [0, 1], MAP_COLOR.PLATFORMS // layer, color
      ));
      this.edges.push(new NewEdge(i, 450, // x1, y1
        i, 650, // x2, y2
        [0, 1], MAP_COLOR.PLATFORMS // layer, color
      ));
    }

    // Platforms intersecting
    for (let i = 450; i < 750; i += 250) {
      this.edges.push(new NewEdge(i, 150, // x1, y1
        i, 350, // x2, y2
        [0], MAP_COLOR.PLATFORMS // layer, color
      ));
      this.edges.push(new NewEdge(i, 450, // x1, y1
        i, 650, // x2, y2
        [0], MAP_COLOR.PLATFORMS // layer, color
      ));

      this.edges.push(new NewEdge(i, 150, // x1, y1
        i, 200, // x2, y2
        [1], MAP_COLOR.PLATFORMS // layer, color
      ));
      this.edges.push(new NewEdge(i, 275, // x1, y1
        i, 350, // x2, y2
        [1], MAP_COLOR.PLATFORMS // layer, color
      ));
      this.edges.push(new NewEdge(i, 450, // x1, y1
        i, 525, // x2, y2
        [1], MAP_COLOR.PLATFORMS // layer, color
      ));
      this.edges.push(new NewEdge(i, 600, // x1, y1
        i, 650, // x2, y2
        [1], MAP_COLOR.PLATFORMS // layer, color
      ));
    }

    // Bridges
    for (let i = 275, j = 775; i < 400; i += 100, j += 100) {
      let y1 = 300;
      let y2 = 500;
      this.edges.push(new NewEdge(i, y1, // x1, y1
        i, y2, // x2, y2
        [1], MAP_COLOR.BRIDGES // layer, color
      ));
      this.edges.push(new NewEdge(j, y1, // x1, y1
        j, y2, // x2, y2
        [1], MAP_COLOR.BRIDGES // layer, color
      ));
    }
  }

  createHori() {
    let platW = MAP_BORDER.PLATFORM_WIDTH;
    let platH = MAP_BORDER.PLATFORM_HEIGHT;
    // 2-layer edges
    this.edges.push(new NewEdge(275, 150,
      275 + platW - 120, 150,
      [0,1], MAP_COLOR.PLATFORMS)
    );
    this.edges.push(new NewEdge(695, 150,
      775 + platW - 200, 150,
      [0,1], MAP_COLOR.PLATFORMS)
      );
    // Bottom Left Platform Bottom
    this.edges.push(new NewEdge(275, 650,
      275 + platW - 120, 650,
      [0,1], MAP_COLOR.PLATFORMS)
    );
    // Bottom Right Platform Bottom
    this.edges.push(new NewEdge(695, 650,
      775 + platW - 200, 650,
      [0,1], MAP_COLOR.PLATFORMS)
    );

    let arr = [195, 380, 695, 880]
    arr.forEach( (el, idx) => {
      // intersecting platform borders full
      if (idx % 2 === 0) {
        for (let j = 350; j < 500; j += 100) {
          this.edges.push(new NewEdge(el, j, // x1, y1
            el + 200, j, // x2, y2
            [0], MAP_COLOR.PLATFORMS // layer, color
          ));
        }
      }
      // intersecting platform borders partial
      for (let j = 350; j < 500; j += 100) {
        this.edges.push(new NewEdge(el, j, // x1, y1
          el + 75, j, // x2, y2
          [1], MAP_COLOR.PLATFORMS // layer, color
        ));
      }
    });

    // Bridges
    for (let i = 200, j = 275; i < 600; i += 325, j += 325) {
      let x1 = 425;
      let x2 = 725;
      this.edges.push(new NewEdge(x1, i, // x1, y1
        x2, i, // x2, y2
        [1], MAP_COLOR.BRIDGES // layer, color
      ));
      this.edges.push(new NewEdge(x1, j, // x1, y1
        x2, j, // x2, y2
        [1], MAP_COLOR.BRIDGES // layer, color
      ));
    }
  }

  drawShade (ctx, x1, x2, y1, y2, gapX, gapY, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x1, y1, x2-x1, y2-y1);

    x1 += gapX;
    x2 += gapX;
    y1 += gapY;
    y2 += gapY;

    ctx.fillRect(x1, y1, x2-x1, y2-y1);
  }
}
