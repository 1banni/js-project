/*
Note: several core methods in this module are based on code from
the App Academy Asteroids Project. The methods were rewritten in my style,
but the logic is substantively equivalent. This applies to the following
methods: norm, scale, dir, dist

https://open.appacademy.io/learn/ch---oct-2022-sf-cohort/javascript/asteroids
*/
import _ from "lodash";


let duke = 0;
let dukeMod = 1000;
let dukeModDelta = 25;

export const Util = {
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
    // console.log('norm', norm);
    return Util.scale(vector, oneOverNorm);
  },
  // Scales vector with magnitude
  // PROOF FIX ME
  scale (vector, magnitude) {
    // console.log('vector', typeof vector[0] );
    let res = [];
    vector.forEach(el => {
      // console.log(el);
      // console.log(magnitude);
      res.push(el * magnitude);
    });
    // let res = vector.map((el) => el * magnitude);
    // console.log('res', res);
    return res;
    // return _.map(vector, (num) => num * magnitude);
  },
  // PROOF NOTE - IN MOTION CLASS, WANT TO NORMALIZE DIRECTION VECTORE THEN SCALE BY MAX_SPEED

}
