
Today
[COMPLETE] Get Canvas, players, and map object to appear on the screen
[ALMOST - MOTION ISN'T CONSISTANT] Implement Key Up Key Down
[COMPLETE] add projectiles class that lets player shoot bullets (upwards only for now)
[COMPLETE] Start work on Util class for position calcs and such
[NEXT] Get players to stop when they hit the screen edge or another object

Saturday
- Finish collision detection/response if possible
- Create projectiles class and incorporate direction into player and textile launch
- Give projectiles the functionality to bounce off of walls (i.e.)
- Add timeout functionality to projectiles - perhaps 50k frames initially?

Sunday
- Polish game map
- object collision!!! build such that
- projectiles
- Update players class to hold projectiles and aquire projectiles with

Basic
-

Start Menu, Instrustructions, Modal


Intermediate
-
- addEvent listener for screen size then redraw objects based on it.

Advanced


// package.json
{
  "name": "mario-battle-00",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "watch": "webpack --watch --mode=development",
    "build": "webpack --mode=production"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wbannister/mario-battle-00.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/wbannister/mario-battle-00/issues"
  },
  "homepage": "https://github.com/wbannister/mario-battle-00#readme",
  "dependencies": {
    "@babel/core": "^7.20.5",
    "@babel/preset-env": "^7.20.2",
    "babel-loader": "^9.1.0",
    "core-js": "^3.26.1",
    "css-loader": "^6.7.2",
    "lodash": "^4.17.21",
    "mini-css-extract-plugin": "^2.7.1",
    "regenerator-runtime": "^0.13.11",
    "sass": "^1.56.1",
    "sass-loader": "^13.2.0",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.0"
  },
  "browserslist": [
    "defaults"
  ]
}
