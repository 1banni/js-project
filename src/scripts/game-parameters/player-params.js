import { DIM_X, DIM_Y, MAP_BORDER } from "./map-params";

const STARTING_POS_CUSHION = MAP_BORDER.WALL_PADDING + 25;

export const NUM_PLAYERS = 2;
export const PLAYERS_COLOR = ['#0dccff', '#a000fa', 'blue', 'purple'];
export const PLAYER_PARAMS = {
  MAX_HEALTH: 100,
  MAX_SPEED: 4, // PROOF this isn't hitting cause setVelo isn't complete
  RADIUS: 20,
  TURN_RADIUS: 0.3,
  ACCELERATION: 0.1,
  PROJECTILES: 3,
  MAX_NOS: 400,
  // TURN_RADIUS: 3;
};

export const PLAYERS_START_POS = [[STARTING_POS_CUSHION, STARTING_POS_CUSHION], // top left
                                  [DIM_X - STARTING_POS_CUSHION, DIM_Y - STARTING_POS_CUSHION], // bottom right
                                  [DIM_X - STARTING_POS_CUSHION, STARTING_POS_CUSHION], // top right
                                  [STARTING_POS_CUSHION, DIM_Y - STARTING_POS_CUSHION] // bottom left
];

// Starting Directions (Angles)
// clockwise ->
export const PLAYERS_START_DIR = [0, 180, 90, 270];

