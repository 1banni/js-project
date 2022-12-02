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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game-view.js */ \"./src/scripts/game-view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game-canvas');\n  new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEM7QUFFOUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUNyRCxJQUFJSiw2REFBUSxDQUFDRyxNQUFNLENBQUM7QUFDdEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyaW8tYmF0dGxlLTAwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZS12aWV3LmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XG4gIG5ldyBHYW1lVmlldyhjYW52YXMpO1xufSk7XG4iXSwibmFtZXMiOlsiR2FtZVZpZXciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/course-map.js":
/*!***********************************!*\
  !*** ./src/scripts/course-map.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseMap; }\n/* harmony export */ });\n/** @type {HTMLCanvasElement} */\n\nconst CON = {\n  WALL_PADDING: 25,\n  WALL_WIDTH: 50\n};\nclass CourseMap {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dims = {\n      width: canvas.width,\n      height: canvas.height\n    }; // Map Dimensions (container for players/objects)\n    this.wallBumper = CON.WALL_PADDING + CON.WALL_WIDTH / 2;\n  }\n  draw(ctx) {\n    this.drawWalls(ctx);\n    this.drawPlatforms(ctx);\n    this.drawBridges(ctx);\n  }\n  drawWalls(ctx) {\n    ctx.strokeStyle = '#753b2b';\n    // ctx.strokeStyle = '#deda12';\n    ctx.lineWidth = CON.WALL_WIDTH;\n\n    //  = 20;\n    // console.log(ctx.strokeStyle);\n\n    ctx.beginPath();\n    ctx.moveTo(CON.WALL_PADDING, CON.WALL_PADDING);\n    ctx.lineTo(this.dims.width - CON.WALL_PADDING, CON.WALL_PADDING);\n    ctx.lineTo(this.dims.width - CON.WALL_PADDING, this.dims.height - CON.WALL_PADDING);\n    ctx.lineTo(CON.WALL_PADDING, this.dims.height - CON.WALL_PADDING);\n    ctx.lineTo(CON.WALL_PADDING, CON.WALL_PADDING - ctx.lineWidth / 2);\n    ctx.stroke();\n  }\n  drawPlatforms(ctx) {\n    //  TBU (PROOF)\n  }\n  drawBridges(ctx) {\n    // TBU (PROOF)\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb3Vyc2UtbWFwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUc7RUFDVkMsWUFBWSxFQUFFLEVBQUU7RUFDaEJDLFVBQVUsRUFBRTtBQUNkLENBQUM7QUFFYyxNQUFNQyxTQUFTLENBQUM7RUFDN0JDLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxJQUFJLEdBQUc7TUFBQ0MsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQUs7TUFBRUMsTUFBTSxFQUFFTCxNQUFNLENBQUNLO0lBQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUQsSUFBSSxDQUFDQyxVQUFVLEdBQUdYLEdBQUcsQ0FBQ0MsWUFBWSxHQUFJRCxHQUFHLENBQUNFLFVBQVUsR0FBRyxDQUFFO0VBQzNEO0VBRUFVLElBQUksQ0FBQ04sR0FBRyxFQUFFO0lBQ1IsSUFBSSxDQUFDTyxTQUFTLENBQUNQLEdBQUcsQ0FBQztJQUNuQixJQUFJLENBQUNRLGFBQWEsQ0FBQ1IsR0FBRyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ1MsV0FBVyxDQUFDVCxHQUFHLENBQUM7RUFDdkI7RUFFQU8sU0FBUyxDQUFFUCxHQUFHLEVBQUU7SUFDZEEsR0FBRyxDQUFDVSxXQUFXLEdBQUcsU0FBUztJQUMzQjtJQUNBVixHQUFHLENBQUNXLFNBQVMsR0FBR2pCLEdBQUcsQ0FBQ0UsVUFBVTs7SUFFOUI7SUFDQTs7SUFFQUksR0FBRyxDQUFDWSxTQUFTLEVBQUU7SUFDZlosR0FBRyxDQUFDYSxNQUFNLENBQUNuQixHQUFHLENBQUNDLFlBQVksRUFBRUQsR0FBRyxDQUFDQyxZQUFZLENBQUM7SUFDOUNLLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLElBQUksQ0FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdULEdBQUcsQ0FBQ0MsWUFBWSxFQUFFRCxHQUFHLENBQUNDLFlBQVksQ0FBQztJQUNoRUssR0FBRyxDQUFDYyxNQUFNLENBQUMsSUFBSSxDQUFDWixJQUFJLENBQUNDLEtBQUssR0FBR1QsR0FBRyxDQUFDQyxZQUFZLEVBQUUsSUFBSSxDQUFDTyxJQUFJLENBQUNFLE1BQU0sR0FBR1YsR0FBRyxDQUFDQyxZQUFZLENBQUM7SUFDbkZLLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDcEIsR0FBRyxDQUFDQyxZQUFZLEVBQUUsSUFBSSxDQUFDTyxJQUFJLENBQUNFLE1BQU0sR0FBR1YsR0FBRyxDQUFDQyxZQUFZLENBQUM7SUFDakVLLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDcEIsR0FBRyxDQUFDQyxZQUFZLEVBQUdELEdBQUcsQ0FBQ0MsWUFBWSxHQUFHSyxHQUFHLENBQUNXLFNBQVMsR0FBRyxDQUFDLENBQUU7SUFDcEVYLEdBQUcsQ0FBQ2UsTUFBTSxFQUFFO0VBQ2Q7RUFFQVAsYUFBYSxDQUFFUixHQUFHLEVBQUU7SUFDbEI7RUFBQTtFQUdGUyxXQUFXLENBQUVULEdBQUcsRUFBRTtJQUNoQjtFQUFBO0FBSUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJpby1iYXR0bGUtMDAvLi9zcmMvc2NyaXB0cy9jb3Vyc2UtbWFwLmpzPzE1NjQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH0gKi9cblxuY29uc3QgQ09OID0ge1xuICBXQUxMX1BBRERJTkc6IDI1LFxuICBXQUxMX1dJRFRIOiA1MCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cnNlTWFwIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZGltcyA9IHt3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHR9OyAvLyBNYXAgRGltZW5zaW9ucyAoY29udGFpbmVyIGZvciBwbGF5ZXJzL29iamVjdHMpXG4gICAgdGhpcy53YWxsQnVtcGVyID0gQ09OLldBTExfUEFERElORyArIChDT04uV0FMTF9XSURUSCAvIDIpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICB0aGlzLmRyYXdXYWxscyhjdHgpO1xuICAgIHRoaXMuZHJhd1BsYXRmb3JtcyhjdHgpO1xuICAgIHRoaXMuZHJhd0JyaWRnZXMoY3R4KTtcbiAgfVxuXG4gIGRyYXdXYWxscyAoY3R4KSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyM3NTNiMmInO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9ICcjZGVkYTEyJztcbiAgICBjdHgubGluZVdpZHRoID0gQ09OLldBTExfV0lEVEg7XG5cbiAgICAvLyAgPSAyMDtcbiAgICAvLyBjb25zb2xlLmxvZyhjdHguc3Ryb2tlU3R5bGUpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oQ09OLldBTExfUEFERElORywgQ09OLldBTExfUEFERElORyk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmRpbXMud2lkdGggLSBDT04uV0FMTF9QQURESU5HLCBDT04uV0FMTF9QQURESU5HKTtcbiAgICBjdHgubGluZVRvKHRoaXMuZGltcy53aWR0aCAtIENPTi5XQUxMX1BBRERJTkcsIHRoaXMuZGltcy5oZWlnaHQgLSBDT04uV0FMTF9QQURESU5HKTtcbiAgICBjdHgubGluZVRvKENPTi5XQUxMX1BBRERJTkcsIHRoaXMuZGltcy5oZWlnaHQgLSBDT04uV0FMTF9QQURESU5HKTtcbiAgICBjdHgubGluZVRvKENPTi5XQUxMX1BBRERJTkcsIChDT04uV0FMTF9QQURESU5HIC0gY3R4LmxpbmVXaWR0aCAvIDIpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3UGxhdGZvcm1zIChjdHgpIHtcbiAgICAvLyAgVEJVIChQUk9PRilcbiAgfVxuXG4gIGRyYXdCcmlkZ2VzIChjdHgpIHtcbiAgICAvLyBUQlUgKFBST09GKVxuICB9XG5cblxufVxuIl0sIm5hbWVzIjpbIkNPTiIsIldBTExfUEFERElORyIsIldBTExfV0lEVEgiLCJDb3Vyc2VNYXAiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1zIiwid2lkdGgiLCJoZWlnaHQiLCJ3YWxsQnVtcGVyIiwiZHJhdyIsImRyYXdXYWxscyIsImRyYXdQbGF0Zm9ybXMiLCJkcmF3QnJpZGdlcyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/course-map.js\n");

/***/ }),

/***/ "./src/scripts/game-view.js":
/*!**********************************!*\
  !*** ./src/scripts/game-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n\nclass GameView {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n    // this.dimensions = {width: canvas.width, height: canvas.height};\n    // this.registerEvents();\n    // this.restart();\n    // this.game = new Game();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLXZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkI7QUFFZCxNQUFNQyxRQUFRLENBQUM7RUFDNUJDLFdBQVcsQ0FBRUMsTUFBTSxFQUFFO0lBQ25CLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSU4sZ0RBQUksQ0FBQ0csTUFBTSxDQUFDOztJQUU1QjtJQUNBO0lBQ0E7SUFDQTtFQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJpby1iYXR0bGUtMDAvLi9zcmMvc2NyaXB0cy9nYW1lLXZpZXcuanM/YzZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IgKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuXG4gICAgLy8gdGhpcy5kaW1lbnNpb25zID0ge3dpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodH07XG4gICAgLy8gdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIC8vIHRoaXMucmVzdGFydCgpO1xuICAgIC8vIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIH1cbn1cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsIkdhbWVWaWV3IiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game-view.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/scripts/player.js\");\n/* harmony import */ var _course_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-map.js */ \"./src/scripts/course-map.js\");\n/** @type {HTMLCanvasElement} */\n\n\n\n// Pixel Sizing\nconst DIM_X = 1200;\nconst DIM_Y = 800;\nconst startPosCushion = 100;\n\n// Initial Object/ComponentPositions\nconst startPos = [[startPosCushion, startPosCushion], [DIM_X - startPosCushion, DIM_Y - startPosCushion], [DIM_X - startPosCushion, startPosCushion], [startPosCushion, DIM_Y - startPosCushion]];\nlet startPosIdx = 0;\n\n// Coloring\nconst playerColors = ['orange', 'yellow', 'blue', 'purple'];\nlet colorIdx = 0;\n\n// Gameplay\nconst numPlayers = 2;\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext('2d');\n    this.map = new _course_map_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n    this.players = Array.from(Array(numPlayers), () => new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startPos[startPosIdx++], playerColors[colorIdx++]));\n    // this.obstacles = Array.from(Array(numObstacles), () => new Obstacle());\n    // this.perks = Array.from(Array(numPerks), () => new Perk());\n    this.draw(this.ctx);\n    this.animate();\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    // Color Canvas\n    ctx.fillStyle = '#339933';\n    ctx.fillRect(0, 0, DIM_X, DIM_Y);\n    this.map.draw(ctx); // Draw Course Map\n\n    this.players.forEach(player => player.draw(ctx)); // Draw Players\n  }\n\n  animate() {\n    // this.moveObjects();\n    this.draw(this.ctx);\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ2lDO0FBQ087O0FBR3hDO0FBQ0EsTUFBTUUsS0FBSyxHQUFHLElBQUk7QUFDbEIsTUFBTUMsS0FBSyxHQUFHLEdBQUc7QUFDakIsTUFBTUMsZUFBZSxHQUFHLEdBQUc7O0FBRTNCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUMsQ0FBQ0QsZUFBZSxFQUFDQSxlQUFlLENBQUMsRUFDakMsQ0FBQ0YsS0FBSyxHQUFHRSxlQUFlLEVBQUNELEtBQUssR0FBR0MsZUFBZSxDQUFDLEVBQ2pELENBQUNGLEtBQUssR0FBR0UsZUFBZSxFQUFDQSxlQUFlLENBQUMsRUFDekMsQ0FBQ0EsZUFBZSxFQUFDRCxLQUFLLEdBQUdDLGVBQWUsQ0FBQyxDQUMxRDtBQUNELElBQUlFLFdBQVcsR0FBRyxDQUFDOztBQUVuQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQztBQUMzRCxJQUFJQyxRQUFRLEdBQUcsQ0FBQzs7QUFFaEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQU9MLE1BQU1DLElBQUksQ0FBQztFQUV4QkMsV0FBVyxDQUFFQyxNQUFNLEVBQUU7SUFDbkIsSUFBSSxDQUFDQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJZCxzREFBUyxDQUFDVyxNQUFNLENBQUM7SUFDaEMsSUFBSSxDQUFDSSxPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRCxLQUFLLENBQUNSLFVBQVUsQ0FBQyxFQUFFLE1BQU0sSUFBSVQsa0RBQU0sQ0FBQ0ssUUFBUSxDQUFDQyxXQUFXLEVBQUUsQ0FBQyxFQUFFQyxZQUFZLENBQUNDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqSDtJQUNBO0lBQ0EsSUFBSSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDTixHQUFHLENBQUM7SUFDbkIsSUFBSSxDQUFDTyxPQUFPLEVBQUU7RUFDaEI7RUFHQUQsSUFBSSxDQUFDTixHQUFHLEVBQUU7SUFDUkEsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW5CLEtBQUssRUFBRUMsS0FBSyxDQUFDO0lBQ2pDO0lBQ0FVLEdBQUcsQ0FBQ1MsU0FBUyxHQUFHLFNBQVM7SUFDekJULEdBQUcsQ0FBQ1UsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVyQixLQUFLLEVBQUVDLEtBQUssQ0FBQztJQUVoQyxJQUFJLENBQUNZLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUVwQixJQUFJLENBQUNHLE9BQU8sQ0FBQ1EsT0FBTyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ04sSUFBSSxDQUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ25EOztFQUdBTyxPQUFPLEdBQUk7SUFDVDtJQUNBLElBQUksQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQ04sR0FBRyxDQUFDO0lBQ25CYSxxQkFBcUIsQ0FBQyxJQUFJLENBQUNOLE9BQU8sQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2hEO0FBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJpby1iYXR0bGUtMDAvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH0gKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgQ291cnNlTWFwIGZyb20gXCIuL2NvdXJzZS1tYXAuanNcIjtcblxuXG4vLyBQaXhlbCBTaXppbmdcbmNvbnN0IERJTV9YID0gMTIwMDtcbmNvbnN0IERJTV9ZID0gODAwO1xuY29uc3Qgc3RhcnRQb3NDdXNoaW9uID0gMTAwO1xuXG4vLyBJbml0aWFsIE9iamVjdC9Db21wb25lbnRQb3NpdGlvbnNcbmNvbnN0IHN0YXJ0UG9zID0gW1tzdGFydFBvc0N1c2hpb24sc3RhcnRQb3NDdXNoaW9uXSxcbiAgICAgICAgICAgICAgICAgIFtESU1fWCAtIHN0YXJ0UG9zQ3VzaGlvbixESU1fWSAtIHN0YXJ0UG9zQ3VzaGlvbl0sXG4gICAgICAgICAgICAgICAgICBbRElNX1ggLSBzdGFydFBvc0N1c2hpb24sc3RhcnRQb3NDdXNoaW9uXSxcbiAgICAgICAgICAgICAgICAgIFtzdGFydFBvc0N1c2hpb24sRElNX1kgLSBzdGFydFBvc0N1c2hpb25dLFxuXTtcbmxldCBzdGFydFBvc0lkeCA9IDA7XG5cbi8vIENvbG9yaW5nXG5jb25zdCBwbGF5ZXJDb2xvcnMgPSBbJ29yYW5nZScsICd5ZWxsb3cnLCAnYmx1ZScsICdwdXJwbGUnXTtcbmxldCBjb2xvcklkeCA9IDA7XG5cbi8vIEdhbWVwbGF5XG5jb25zdCBudW1QbGF5ZXJzID0gMjtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuXG4gIGNvbnN0cnVjdG9yIChjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMubWFwID0gbmV3IENvdXJzZU1hcChjYW52YXMpO1xuICAgIHRoaXMucGxheWVycyA9IEFycmF5LmZyb20oQXJyYXkobnVtUGxheWVycyksICgpID0+IG5ldyBQbGF5ZXIoc3RhcnRQb3Nbc3RhcnRQb3NJZHgrK10sIHBsYXllckNvbG9yc1tjb2xvcklkeCsrXSkpO1xuICAgIC8vIHRoaXMub2JzdGFjbGVzID0gQXJyYXkuZnJvbShBcnJheShudW1PYnN0YWNsZXMpLCAoKSA9PiBuZXcgT2JzdGFjbGUoKSk7XG4gICAgLy8gdGhpcy5wZXJrcyA9IEFycmF5LmZyb20oQXJyYXkobnVtUGVya3MpLCAoKSA9PiBuZXcgUGVyaygpKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAvLyBDb2xvciBDYW52YXNcbiAgICBjdHguZmlsbFN0eWxlID0gJyMzMzk5MzMnO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuXG4gICAgdGhpcy5tYXAuZHJhdyhjdHgpOyAvLyBEcmF3IENvdXJzZSBNYXBcblxuICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiBwbGF5ZXIuZHJhdyhjdHgpKTsvLyBEcmF3IFBsYXllcnNcbiAgfVxuXG5cbiAgYW5pbWF0ZSAoKSB7XG4gICAgLy8gdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG59XG4iXSwibmFtZXMiOlsiUGxheWVyIiwiQ291cnNlTWFwIiwiRElNX1giLCJESU1fWSIsInN0YXJ0UG9zQ3VzaGlvbiIsInN0YXJ0UG9zIiwic3RhcnRQb3NJZHgiLCJwbGF5ZXJDb2xvcnMiLCJjb2xvcklkeCIsIm51bVBsYXllcnMiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwibWFwIiwicGxheWVycyIsIkFycmF5IiwiZnJvbSIsImRyYXciLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb3JFYWNoIiwicGxheWVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/** @type {HTMLCanvasElement} */\n\nconst CON = {\n  MAX_HEALTH: 100,\n  MAX_SPEED: 5,\n  RADIUS: 15,\n  MAX_NOS: 40\n  // TURN_RADIUS: 3;\n};\n\nclass Player {\n  constructor(pos, color) {\n    this.pos = pos;\n    this.color = color;\n    this.radius = CON.RADIUS;\n    this.health = CON.MAX_HEALTH;\n    this.nitrous = CON.MAX_NOS;\n    this.speed = 0;\n    this.direction = 0;\n  }\n\n  // PROOF: Potential Bug - Think about how you're passing context around\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n    ctx.fill();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLE1BQU1BLEdBQUcsR0FBRztFQUNWQyxVQUFVLEVBQUUsR0FBRztFQUNmQyxTQUFTLEVBQUUsQ0FBQztFQUNaQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxPQUFPLEVBQUU7RUFDVDtBQUNGLENBQUM7O0FBR2MsTUFBTUMsTUFBTSxDQUFDO0VBQzFCQyxXQUFXLENBQUNDLEdBQUcsRUFBRUMsS0FBSyxFQUFFO0lBQ3RCLElBQUksQ0FBQ0QsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdULEdBQUcsQ0FBQ0csTUFBTTtJQUN4QixJQUFJLENBQUNPLE1BQU0sR0FBR1YsR0FBRyxDQUFDQyxVQUFVO0lBQzVCLElBQUksQ0FBQ1UsT0FBTyxHQUFHWCxHQUFHLENBQUNJLE9BQU87SUFDMUIsSUFBSSxDQUFDUSxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQUM7RUFDcEI7O0VBRUE7RUFDQUMsSUFBSSxDQUFDQyxHQUFHLEVBQUU7SUFDUkEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDUixLQUFLO0lBQzFCTyxHQUFHLENBQUNFLFNBQVMsRUFBRTtJQUNmRixHQUFHLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFDckMsQ0FBQyxFQUFFLENBQUMsR0FBR1UsSUFBSSxDQUFDQyxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBQzlCTCxHQUFHLENBQUNNLElBQUksRUFBRTtFQUNaO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJpby1iYXR0bGUtMDAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQHR5cGUge0hUTUxDYW52YXNFbGVtZW50fSAqL1xuXG5jb25zdCBDT04gPSB7XG4gIE1BWF9IRUFMVEg6IDEwMCxcbiAgTUFYX1NQRUVEOiA1LFxuICBSQURJVVM6IDE1LFxuICBNQVhfTk9TOiA0MCxcbiAgLy8gVFVSTl9SQURJVVM6IDM7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocG9zLCBjb2xvcikge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnJhZGl1cyA9IENPTi5SQURJVVM7XG4gICAgdGhpcy5oZWFsdGggPSBDT04uTUFYX0hFQUxUSDtcbiAgICB0aGlzLm5pdHJvdXMgPSBDT04uTUFYX05PUztcbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gIH1cblxuICAvLyBQUk9PRjogUG90ZW50aWFsIEJ1ZyAtIFRoaW5rIGFib3V0IGhvdyB5b3UncmUgcGFzc2luZyBjb250ZXh0IGFyb3VuZFxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDT04iLCJNQVhfSEVBTFRIIiwiTUFYX1NQRUVEIiwiUkFESVVTIiwiTUFYX05PUyIsIlBsYXllciIsImNvbnN0cnVjdG9yIiwicG9zIiwiY29sb3IiLCJyYWRpdXMiLCJoZWFsdGgiLCJuaXRyb3VzIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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