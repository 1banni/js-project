/*
Note: several core methods in this module are based on code from
the App Academy Asteroids Project. The methods were rewritten in my style,
but the logic is substantively equivalent. This applies to the following
methods: norm, scale, dir, dist

https://open.appacademy.io/learn/ch---oct-2022-sf-cohort/javascript/asteroids
*/

import _ from "lodash";
import { MAP } from "../game-parameters/map-params";


let duke = 0;
let dukeMod = 1000;
let dukeModDelta = 25;

export const Util = {
  // Infrequently log in console
  infreqLog (obj, str='', freq = 0) {
    if (duke++ % dukeMod === 0) {
      duke += freq;
      console.log(typeof obj, obj, str);
      dukeMod = Math.floor(dukeMod * (1 + dukeModDelta/100));
    }
  },
  // Calculates radians from degree
  directionFrom(degree) {
    let radians = Math.PI / 180 * degree;
    return [Math.sin(radians), Math.cos(radians)];
  },
  // Calculates distance between two points
  dist (p1, p2) {
    let distSquared = (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
    return Math.sqrt(distSquared);
  },
  // Calculates magnitude (norm) of vector
  norm (vector) {
    return Util.dist([0,0], vector);
  },
  // Peels out direction of vector
  dir (vector) {
    let norm = Util.norm(vector);
    let oneOverNorm = (norm === 0 ? 1 : norm);
    return Util.scale(vector, oneOverNorm);
  },
  // Scales vector with magnitude
  scale (vector, magnitude) {
    return _.map(vector, (num) => num * magnitude);
  },
  // PROOF NOTE - IN MOTION CLASS, WANT TO NORMALIZE DIRECTION VECTORE THEN SCALE BY MAX_SPEED

  // getAngle(dx, dy) {
  //   return 180 * (Math.atan2(dy, dx)) * Math.PI;
  // },
  generateCoords(spacing) {
    let sp = spacing;
    let x = MAP.BORDER_WIDTH + Math.random() * (MAP.DIM_X - MAP.BORDER_WIDTH * 2 - sp);
    let y = MAP.BORDER_WIDTH + Math.random() * (MAP.DIM_Y - MAP.BORDER_WIDTH * 2 - sp);
    // Force perks to spawn outside of platforms
    while (((x >= 200 - sp && x <= 400 + sp) || (x >= 700 - sp && x <= 900 + sp))
      && ((y >= 150 - sp && y <= 350) || (y >= 450 - sp && y <= 650))
    ) {
      x = MAP.BORDER_WIDTH + Math.random() * (MAP.DIM_X - MAP.BORDER_WIDTH * 2 - sp);
      y = MAP.BORDER_WIDTH + Math.random() * (MAP.DIM_Y - MAP.BORDER_WIDTH * 2 - sp);
    }
    return [x,y];
  },

  baseConverter(n, b) {
    let basis = '0123456789abcdef';
    if (n < b) return basis[n];
    return baseConverter(Math.floor(n / b), b) + basis[n % b];
  },

  lightenColor(color, degree) {
    let basis = '0123456789abcdef';
    let res = color.slice(1).split("").map(char => {
      let num = basis.indexOf(char);
      let newNum = Math.floor((15 - num) / degree + num).toString();
      return basis[newNum];
    });
    res.unshift('#');
    return res.join("");
  }
}
