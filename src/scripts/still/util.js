/*
Note: several methods (norm, scale, dir, dist) in this module are based on code from
the App Academy project below.
https://open.appacademy.io/learn/ch---oct-2022-sf-cohort/javascript/asteroids
*/
import _ from "lodash";
import { MAP } from '../GameParams';



export const Util = {

  // Generate random coordinates
  randomCoords(x1, y1, width, height, spacing) {
    let sp = spacing; // (i.e., for preventing map/perk overlap)
    let x = x1 + Math.random() * (width - sp);
    let y = y1 + Math.random() * (height - sp);

    // Force perks to spawn outside of platforms
    while (
      ((x >= 200 - sp && x <= 400 + sp) ||
       (x >= 700 - sp && x <= 900 + sp))
    &&
      ((y >= 150 - sp && y <= 350) ||
       (y >= 450 - sp && y <= 650))
    ) {
      x = x1 + Math.random() * (width - sp);
      y = y1 + Math.random() * (height - sp);
    }
    return [x, y];
  },

  // Radians from degrees
  directionFrom(degree) {
    let radians = Math.PI / 180 * degree;
    return [Math.sin(radians), Math.cos(radians)];
  },

  // Distance between two points
  dist (p1, p2) {
    let distSquared = (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
    return Math.sqrt(distSquared);
  },

  // Magnitude (norm) of vector
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
