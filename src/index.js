import GameView from "./scripts/game-view.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game-canvas');
  new GameView(canvas);
});
