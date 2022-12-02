/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game-view.js":
/*!**************************!*\
  !*** ./src/game-view.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nclass GameView {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n    // this.dimensions = {width: canvas.width, height: canvas.height};\n    // this.registerEvents();\n    // this.restart();\n    // this.game = new Game();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS12aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZCO0FBRWQsTUFBTUMsUUFBUSxDQUFDO0VBQzVCQyxXQUFXLENBQUVDLE1BQU0sRUFBRTtJQUNuQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlOLGdEQUFJLENBQUNHLE1BQU0sQ0FBQztJQUM1QjtJQUNBO0lBQ0E7SUFDQTtFQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJpby1iYXR0bGUtMDAvLi9zcmMvZ2FtZS12aWV3LmpzPzIyNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yIChjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgICAvLyB0aGlzLmRpbWVuc2lvbnMgPSB7d2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0fTtcbiAgICAvLyB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgLy8gdGhpcy5yZXN0YXJ0KCk7XG4gICAgLy8gdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgfVxufVxuXG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game-view.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\nconst DIM_X = 1200;\nconst DIM_Y = 800;\nconst numPlayers = 2;\nconst colors = ['orange', 'yellow', 'blue', 'purple'];\nlet colorIdx = 0;\nconst startPos = [[100, 100], [1100, 700], [100, 700], [1100, 100]];\nlet startPosIdx = 0;\nclass Game {\n  constructor(canvas) {\n    this.players = Array.from(Array(numPlayers), () => new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startPos[startPosIdx++], colors[colorIdx++]));\n    // this.obstacles = Array.from(Array(numObstacles), () => new Obstacle());\n    // this.perks = Array.from(Array(numPerks), () => new Perk());\n    this.ctx = canvas.getContext('2d');\n    this.draw(this.ctx);\n    this.animate();\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    ctx.fillStyle = '#339933';\n    ctx.fillRect(0, 0, DIM_X, DIM_Y);\n    this.players.forEach(player => player.draw(ctx));\n  }\n  animate() {\n    // this.moveObjects();\n    this.draw(this.ctx);\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpQztBQUVqQyxNQUFNQyxLQUFLLEdBQUcsSUFBSTtBQUNsQixNQUFNQyxLQUFLLEdBQUcsR0FBRztBQUVqQixNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUdwQixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7QUFDckQsSUFBSUMsUUFBUSxHQUFHLENBQUM7QUFDaEIsTUFBTUMsUUFBUSxHQUFHLENBQ2YsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQ1g7QUFDRCxJQUFJQyxXQUFXLEdBQUcsQ0FBQztBQUtKLE1BQU1DLElBQUksQ0FBQztFQUV4QkMsV0FBVyxDQUFFQyxNQUFNLEVBQUU7SUFDbkIsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRCxLQUFLLENBQUNULFVBQVUsQ0FBQyxFQUFFLE1BQU0sSUFBSUgsa0RBQU0sQ0FBQ00sUUFBUSxDQUFDQyxXQUFXLEVBQUUsQ0FBQyxFQUFFSCxNQUFNLENBQUNDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRztJQUNBO0lBQ0EsSUFBSSxDQUFDUyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNGLEdBQUcsQ0FBQztJQUNuQixJQUFJLENBQUNHLE9BQU8sRUFBRTtFQUdoQjtFQUdBRCxJQUFJLENBQUNGLEdBQUcsRUFBRTtJQUNSQSxHQUFHLENBQUNJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFakIsS0FBSyxFQUFFQyxLQUFLLENBQUM7SUFDakNZLEdBQUcsQ0FBQ0ssU0FBUyxHQUFHLFNBQVM7SUFDekJMLEdBQUcsQ0FBQ00sUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVuQixLQUFLLEVBQUVDLEtBQUssQ0FBQztJQUNoQyxJQUFJLENBQUNTLE9BQU8sQ0FBQ1UsT0FBTyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ04sSUFBSSxDQUFDRixHQUFHLENBQUMsQ0FBQztFQUNsRDtFQUdBRyxPQUFPLEdBQUk7SUFDVDtJQUNBLElBQUksQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQ0YsR0FBRyxDQUFDO0lBQ25CUyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNOLE9BQU8sQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2hEO0FBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJpby1iYXR0bGUtMDAvLi9zcmMvZ2FtZS5qcz83ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5cbmNvbnN0IERJTV9YID0gMTIwMDtcbmNvbnN0IERJTV9ZID0gODAwO1xuXG5jb25zdCBudW1QbGF5ZXJzID0gMjtcblxuXG5jb25zdCBjb2xvcnMgPSBbJ29yYW5nZScsICd5ZWxsb3cnLCAnYmx1ZScsICdwdXJwbGUnXTtcbmxldCBjb2xvcklkeCA9IDA7XG5jb25zdCBzdGFydFBvcyA9IFtcbiAgWzEwMCwxMDBdLFxuICBbMTEwMCw3MDBdLFxuICBbMTAwLDcwMF0sXG4gIFsxMTAwLDEwMF0sXG5dO1xubGV0IHN0YXJ0UG9zSWR4ID0gMDtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgY29uc3RydWN0b3IgKGNhbnZhcykge1xuICAgIHRoaXMucGxheWVycyA9IEFycmF5LmZyb20oQXJyYXkobnVtUGxheWVycyksICgpID0+IG5ldyBQbGF5ZXIoc3RhcnRQb3Nbc3RhcnRQb3NJZHgrK10sIGNvbG9yc1tjb2xvcklkeCsrXSkpO1xuICAgIC8vIHRoaXMub2JzdGFjbGVzID0gQXJyYXkuZnJvbShBcnJheShudW1PYnN0YWNsZXMpLCAoKSA9PiBuZXcgT2JzdGFjbGUoKSk7XG4gICAgLy8gdGhpcy5wZXJrcyA9IEFycmF5LmZyb20oQXJyYXkobnVtUGVya3MpLCAoKSA9PiBuZXcgUGVyaygpKTtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5hbmltYXRlKCk7XG5cblxuICB9XG5cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyMzMzk5MzMnO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiBwbGF5ZXIuZHJhdyhjdHgpKTtcbiAgfVxuXG5cbiAgYW5pbWF0ZSAoKSB7XG4gICAgLy8gdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG59XG4iXSwibmFtZXMiOlsiUGxheWVyIiwiRElNX1giLCJESU1fWSIsIm51bVBsYXllcnMiLCJjb2xvcnMiLCJjb2xvcklkeCIsInN0YXJ0UG9zIiwic3RhcnRQb3NJZHgiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJwbGF5ZXJzIiwiQXJyYXkiLCJmcm9tIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXciLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb3JFYWNoIiwicGxheWVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-view.js */ \"./src/game-view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game-canvas');\n  new _game_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBc0M7QUFFdENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUNyRCxJQUFJSixxREFBUSxDQUFDRyxNQUFNLENBQUM7QUFDdEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyaW8tYmF0dGxlLTAwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL2dhbWUtdmlldy5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICBuZXcgR2FtZVZpZXcoY2FudmFzKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nconst CON = {\n  MAX_HEALTH: 100,\n  MAX_SPEED: 5,\n  RADIUS: 10,\n  MAX_NOS: 40\n  // TURN_RADIUS: 3;\n};\n\nclass Player {\n  constructor(pos, color) {\n    this.pos = pos;\n    this.color = color;\n    this.radius = CON.RADIUS;\n    this.health = CON.MAX_HEALTH;\n    this.nitrous = CON.MAX_NOS;\n    this.speed = 0;\n    this.direction = 0;\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    // ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    // ctx.fillStyle = '#339933';\n    // ctx.fillRect(0, 0, DIM_X, DIM_Y);\n\n    /********** PROOF: TEST CODE **********/\n    console.log(this);\n    console.log(this.pos);\n    console.log(this.pos[0]);\n    console.log(this.pos[1]);\n    /********** PROOF: TEST CODE **********/\n\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n    ctx.fill();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUc7RUFDVkMsVUFBVSxFQUFFLEdBQUc7RUFDZkMsU0FBUyxFQUFFLENBQUM7RUFDWkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsT0FBTyxFQUFFO0VBQ1Q7QUFDRixDQUFDOztBQUljLE1BQU1DLE1BQU0sQ0FBQztFQUMxQkMsV0FBVyxDQUFDQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtJQUN0QixJQUFJLENBQUNELEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHVCxHQUFHLENBQUNHLE1BQU07SUFDeEIsSUFBSSxDQUFDTyxNQUFNLEdBQUdWLEdBQUcsQ0FBQ0MsVUFBVTtJQUM1QixJQUFJLENBQUNVLE9BQU8sR0FBR1gsR0FBRyxDQUFDSSxPQUFPO0lBQzFCLElBQUksQ0FBQ1EsS0FBSyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFDO0VBQ3BCO0VBR0FDLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0lBQ1JBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ1IsS0FBSztJQUMxQk8sR0FBRyxDQUFDRSxTQUFTLEVBQUU7SUFDZjtJQUNBO0lBQ0E7O0lBRUE7SUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2pCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNaLEdBQUcsQ0FBQztJQUNyQlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEJXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCOztJQUVBUSxHQUFHLENBQUNLLEdBQUcsQ0FBQyxJQUFJLENBQUNiLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFDckMsQ0FBQyxFQUFFLENBQUMsR0FBR1ksSUFBSSxDQUFDQyxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBRTlCUCxHQUFHLENBQUNRLElBQUksRUFBRTtFQUNaO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJpby1iYXR0bGUtMDAvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09OID0ge1xuICBNQVhfSEVBTFRIOiAxMDAsXG4gIE1BWF9TUEVFRDogNSxcbiAgUkFESVVTOiAxMCxcbiAgTUFYX05PUzogNDAsXG4gIC8vIFRVUk5fUkFESVVTOiAzO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocG9zLCBjb2xvcikge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnJhZGl1cyA9IENPTi5SQURJVVM7XG4gICAgdGhpcy5oZWFsdGggPSBDT04uTUFYX0hFQUxUSDtcbiAgICB0aGlzLm5pdHJvdXMgPSBDT04uTUFYX05PUztcbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gIH1cblxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJyMzMzk5MzMnO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuXG4gICAgLyoqKioqKioqKiogUFJPT0Y6IFRFU1QgQ09ERSAqKioqKioqKioqL1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucG9zKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBvc1swXSk7XG4gICAgY29uc29sZS5sb2codGhpcy5wb3NbMV0pO1xuICAgIC8qKioqKioqKioqIFBST09GOiBURVNUIENPREUgKioqKioqKioqKi9cblxuICAgIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG5cbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ09OIiwiTUFYX0hFQUxUSCIsIk1BWF9TUEVFRCIsIlJBRElVUyIsIk1BWF9OT1MiLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsInBvcyIsImNvbG9yIiwicmFkaXVzIiwiaGVhbHRoIiwibml0cm91cyIsInNwZWVkIiwiZGlyZWN0aW9uIiwiZHJhdyIsImN0eCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJpby1iYXR0bGUtMDAvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;