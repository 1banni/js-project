/*
Note: several core methods in this module are based on code from
the App Academy Asteroids Project. The methods were rewritten in my style,
but the logic is substantively equivalent. This applies to the following
methods: norm, scale, dir, dist

https://open.appacademy.io/learn/ch---oct-2022-sf-cohort/javascript/asteroids
*/

import _ from "lodash";
import { MAP } from '../game-params';


let duke = 0;
let dukeMod = 1000;
let dukeModDelta = 25;

export const Util = {
  // Infrequently log in console (i.e., player position,  other game state)
  infreqLog(str = '', obj, freq = 0) {
    if (duke++ % dukeMod === 0) {
      duke += freq;
      console.log(str, obj, typeof obj);
      dukeMod = Math.floor(dukeMod * (1 + dukeModDelta/100));
    }
  },

  // Generate random coordinates
  randomCoords(x1, y1, width, height, spacing) {
    let sp = spacing; // (i.e., for preventing image/elemnt overlap)
    let x = x1 + Math.random() * (width - sp);
    let y = y1 + Math.random() * (height - sp);

    // Force perks to spawn outside of platforms
    while (((x >= 200 - sp && x <= 400 + sp) || (x >= 700 - sp && x <= 900 + sp))
      && ((y >= 150 - sp && y <= 350) || (y >= 450 - sp && y <= 650))
    ) {
      x = x1 + Math.random() * (width - sp);
      y = y1 + Math.random() * (height - sp);
    }
    return [x, y];
  },

  // lighten a color (bring closer to white)
  lightenColor(color, degree) {
    let basis = '0123456789abcdef';
    let res = color.slice(1).split("").map(char => {
      let num = basis.indexOf(char);
      let newNum = Math.floor((15 - num) / degree + num).toString();
      return basis[newNum];
    });
    res.unshift('#');
    return res.join("");
  },
  // darkenColor(color, degree) {
  //   let basis = '0123456789abcdef';
  //   let res = color.slice(1).split("").map(char => {
  //     let num = basis.indexOf(char);
  //     let newNum = Math.floor((num) * degree + num).toString();
  //     return basis[newNum];
  //   });
  //   res.unshift('#');
  //   return res.join("");
  // },

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
  }
}
