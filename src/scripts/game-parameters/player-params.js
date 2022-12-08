import { MAP } from "./map-params";

const CUSHION = MAP.BORDER_WIDTH + 25;

export const PLAYERS = {
  NUMBER: 2,
  MAX_HEALTH: 200,
  MAX_SPEED: 4, // PROOF this isn't hitting cause setVelo isn't complete
  RADIUS: 20,
  TURN_RADIUS: 0.3,
  ACCELERATION: 0.1,
  PROJECTILES: 3,
  MAX_NOS: 400,
  COLORS: ['#0dccff', '#a000fa', 'blue', 'purple'],
  STARTING_POS: [[CUSHION, CUSHION], // top left
                 [MAP.DIM_X - CUSHION, MAP.DIM_Y - CUSHION], // bottom right
                 [MAP.DIM_X - CUSHION, CUSHION], // top right
                 [CUSHION, MAP.DIM_Y - CUSHION]], // bottom left]
  STARTING_DIR: [0, 180, 90, 270],
};



