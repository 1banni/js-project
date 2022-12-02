// https://stackoverflow.com/questions/14389864/javascript-html5-making-a-canvas-animation-using-wasd-to-move-around-a-rectang


//neccessary variables
let tickX = 10;
let tickY = 10;

let keyW = false;
let keyA = false;
let keyS = false;
let keyD = false;
let keySpace = false;

// Movement Variables
/* ^^^ PROOF: delete unused keys ****************************/
// const keys = {
//   w: false, // up
//   a: false, // left
//   s: false, // down
//   d: false, // right
//   j: false, // activate shield (60 second cooldown)
//   k: false, // activate nitrous oxide / turbo speed boost
//   l: false, // character speciality
//   space: false,
// };

// const keyMap = {
//   87: 'w',
//   65: 'a',
//   83: 's',

// };




// (function () {
//   let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
// window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// window.requestAnimationFrame = requestAnimationFrame;
// })();


//event listener
window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);

function keyDown(evt) {
  // Note: when adding more keys, you can lookup ASCIIs in Node.js with
  // "a".charCodeAt() - 32;
  let name = evt.key;
  let code = evt.code;
  // Alert the key name and key code on keydown
  console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
  let keyCode = evt.keyCode;
  if (keyCode === 87) {
    keyW = true;
  } else if (keyCode === 65) {
    keyA = true;
  } else if (keyCode === 83) {
    keyS = true;
  } else if (keyCode === 68) {
    keyD = true;
  } else if (keyCode === 74) {
    keyJ = true;
  } else if (keyCode === 75) {
    keyK = true;
  } else if (keyCode === 76) {
    keyL = true;
  } else if (keyCode === 0) {
    keySpace = true;
  }
}

function keyUp(evt) {
  let keyCode = evt.keyCode;
  if (keyCode === 87) {
    keyW = true;
  } else if (keyCode === 65) {
    keyA = true;
  } else if (keyCode === 83) {
    keyS = true;
  } else if (keyCode === 68) {
    keyD = true;
  } else if (keyCode === 74) {
    keyJ = true;
  } else if (keyCode === 75) {
    keyK = true;
  } else if (keyCode === 76) {
    keyL = true;
  } else if (keyCode === 0) {
    keySpace = true;
  }
}


//main animation function
function drawStuff() {
  window.requestAnimationFrame(drawStuff);
  var canvas = document.getElementById("canvas00");
  var c = canvas.getContext("2d");

  c.clearRect(0, 0, 800, 800);
  c.fillStyle = "blue";
  c.fillRect(tickX, tickY, 100, 100);

  if (keyD == true) {
    tickX += 1;
  }
  if (keyS == true) {
    tickY += 1;
  }
  if (keyA == true) {
    tickX--;
  }
  if (keyW == true) {
    tickY--;
  }
}
window.requestAnimationFrame(drawStuff);
