import { MAP } from "../game-params";
import Edge from "./edge";
import { Util } from "./util";

export default class EdgeController {

  edges = [];

  constructor(ctx) {
    this.ctx = ctx;
    this.create();
  }

  drawCanvas(ctx) {
    let wp = MAP.BORDER_WIDTH;

    ctx.fillStyle = MAP.COLORS.BORDER;
    ctx.fillRect(0, 0, MAP.DIM_X, MAP.DIM_Y);

    ctx.fillStyle = MAP.COLORS.GROUND;
    ctx.fillRect(wp, 0, MAP.DIM_X - 2 * wp, MAP.DIM_Y);
    // edges.forEach(edge => EdgeController.addEdge(edge));
  }

  drawLayer(ctx, layer) {
    this.edges.forEach(edge => {
      // only draw top most level of the layer
      if (Math.max(...edge.layers) === layer) edge.draw(ctx);
    });

    // only draw shade on layer 0 (not included in edges due to lack of
    // ... intersects / collision functionality)
    if (layer === 1) {
      this.drawShade(ctx, 275, 375, 300, 500, 500, 0, 'rgba(150, 150, 150, 0.7)');
      this.drawShade(ctx, 425, 725, 200, 275, 0, 325, 'rgba(150, 150, 150, 0.7)');
      // this.drawShade(ctx, 275, 375, 300, 500, 500, 0, 'rgba(150, 255, 255, 0.7)');
      // this.drawShade(ctx, 425, 725, 200, 275, 0, 325, 'rgba(150, 255, 255, 0.7)');
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
    this.createVertBorder();
    // Bridges open
    for (let i = 200; i < 1200; i += 750) {
      this.edges.push(new Edge(i, 150, // x1, y1
      i, 350, // x2, y2
        [0, 1], (MAP.COLORS.PLATFORMS) // layer, color
      ));

      this.edges.push(new Edge(i, 450, // x1, y1
      i, 650, // x2, y2
      [0, 1], (MAP.COLORS.PLATFORMS) // layer, color
      ));
    }
    // Platform
    for (let i = 450; i < 750; i += 250) {
      this.edges.push(new Edge(i, 150 - 5, // x1, y1
      i, 350, // x2, y2
      [0], Util.lightenColor(MAP.COLORS.PLATFORMS) // layer, color
      ));
      this.edges.push(new Edge(i, 450 - 5, // x1, y1
      i, 650, // x2, y2
      [0], MAP.COLORS.PLATFORMS // layer, color
      ));

      // Platforms intersecting
      this.edges.push(new Edge(i, 150, // x1, y1
      i, 195, // x2, y2
      [1], Util.lightenColor(MAP.COLORS.PLATFORMS) // layer, color
      ));
      this.edges.push(new Edge(i, 450, // x1, y1
      i, 520, // x2, y2
      [1], MAP.COLORS.PLATFORMS // layer, color
      ));
    }

    // Bridges
    for (let i = 275, j = 775; i < 400; i += 100, j += 100) {
      let y1 = 300;
      let y2 = 500;
      this.edges.push(new Edge(i, y1, // x1, y1
        i, y2, // x2, y2
        [1], MAP.COLORS.BRIDGES // layer, color
      ));
      this.edges.push(new Edge(j, y1, // x1, y1
        j, y2, // x2, y2
        [1], MAP.COLORS.BRIDGES // layer, color
      ));
    }
  }

  createVertBorder() {
    let wallPad = MAP.BORDER_WIDTH;

    // Game Border Left
    this.edges.push(new Edge(wallPad, 0, // x1, y1
      wallPad, MAP.DIM_Y, // x2, y2
      [0, 1], MAP.COLORS.EDGES // layer, color
    ));

    // Game Border Right
    this.edges.push(new Edge(MAP.DIM_X - wallPad - 1, 0, // x1, y1
      MAP.DIM_X - wallPad, MAP.DIM_Y, // x2, y2
      [0, 1], MAP.COLORS.EDGES // layer, color
    ));
  }

  createHori() {
    this.createHoriBorder();

    let platW = MAP.PLATFORM_WIDTH;
    let platH = MAP.PLATFORM_HEIGHT;

    // Platform 1 Top
    this.edges.push(new Edge(275, 150,
      275 + platW - 125, 150,
      [0,1], MAP.COLORS.PLATFORMS));

    // Platform 2 Top
    this.edges.push(new Edge(700, 150,
      775 + platW - 200, 150,
      [0,1], MAP.COLORS.PLATFORMS));

    // Platform 3 Bottom
    this.edges.push(new Edge(275, 650,
      275 + platW - 125 + 5, 650,
      [0,1], MAP.COLORS.PLATFORMS));

    // Platform 4 Bottom
    this.edges.push(new Edge(700 - 5, 650,
      775 + platW - 200, 650,
      [0,1], MAP.COLORS.PLATFORMS));

      // smthn
      let arr = [200 - 5, 375, 700+5, 875]
      arr.forEach( (el, idx) => {
        // intersecting platform borders full
        if (idx % 2 === 0) {
          for (let j = 350 - 5; j < 500; j += 100 + 5) {
            this.edges.push(new Edge(el, j, // x1, y1
            el + 250, j, // x2, y2
            [0], MAP.COLORS.PLATFORMS // layer, color
            ));
          }
        }
        // intersecting platform borders partial
        for (let j = 350 - 5; j < 500; j += 100 + 5) {
          this.edges.push(new Edge(el, j, // x1, y1
          el + 75, j, // x2, y2
          [1], MAP.COLORS.PLATFORMS // layer, color
          ));
        }
      });

    // Bridges
    for (let i = 200, j = 275; i < 600; i += 325, j += 325) {
      let x1 = 425;
      let x2 = 725;
      this.edges.push(new Edge(x1, i, // x1, y1
        x2, i, // x2, y2
        [1], MAP.COLORS.BRIDGES // layer, color
      ));
      this.edges.push(new Edge(x1, j, // x1, y1
        x2, j, // x2, y2
        [1], MAP.COLORS.BRIDGES // layer, color
      ));
    }
  }

  createHoriBorder () {
    let wallPad = MAP.BORDER_WIDTH;
    let ceilPad = MAP.BORDER_WIDTH / 2;
    /***** Top *****/
    // Game Border Left
    this.edges.push(new Edge(wallPad, ceilPad + 5, // x1, y1
      250, ceilPad + 5, // x2, y2
      [0, 1], MAP.COLORS.EDGES // layer, color
    ));
    // Game Border Middle
    this.edges.push(new Edge(MAP.DIM_X / 2 * 0.8, ceilPad + 5, // x1, y1
      MAP.DIM_X / 2 * 1.2, ceilPad + 5, // x2, y2
      [0, 1], MAP.COLORS.EDGES // layer, color
    ));
    // Game Border Right
    this.edges.push(new Edge(950, ceilPad + 5, // x1, y1
      MAP.DIM_X - wallPad, ceilPad + 5, // x2, y2
      [0, 1], MAP.COLORS.EDGES // layer, color
    ));


    /***** Middle *****/
    // Game Border Left
    this.edges.push(new Edge(wallPad, MAP.DIM_Y - (ceilPad + 5), // x1, y1
      250, MAP.DIM_Y - (ceilPad + 5), // x2, y2
      [0, 1], MAP.COLORS.EDGES // layer, color
    ));
    // Game Border Middle
    this.edges.push(new Edge(MAP.DIM_X / 2 * 0.8, MAP.DIM_Y - (ceilPad + 5), // x1, y1
      MAP.DIM_X / 2 * 1.2, MAP.DIM_Y - (ceilPad + 5), // x2, y2
      [0, 1], MAP.COLORS.EDGES // layer, color
    ));
    // Game Border Right
    this.edges.push(new Edge(950, MAP.DIM_Y - (ceilPad + 5), // x1, y1
      MAP.DIM_X - wallPad, MAP.DIM_Y - (ceilPad + 5), // x2, y2
      [0, 1], MAP.COLORS.EDGES // layer, color
    ));

    // Game Border Right
    this.edges.push(new Edge(MAP.DIM_X - wallPad, 0, // x1, y1
      MAP.DIM_X - wallPad, MAP.DIM_Y, // x2, y2
      [0, 1], MAP.COLORS.EDGES // layer, color
    ));
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
