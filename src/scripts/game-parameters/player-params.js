import { DIM_X, DIM_Y } from "./pos-and-dim";
import { MAP_BORDER } from "./map-params";

const STARTING_POS_CUSHION = MAP_BORDER.WALL_PADDING + 25;

export const NUM_PLAYERS = 2;
export const PLAYERS_COLOR = ['#0d00ff', '#a000fa', 'blue', 'purple'];
export const PLAYER_PARAMS = {
  MAX_HEALTH: 100,
  MAX_SPEED: 10, // PROOF this isn't hitting cause setVelo isn't complete
  RADIUS: 20,
  TURN_RADIUS: 0.5,
  ACCELERATION: 0.05,
  PROJECTILES: 10000,
  MAX_NOS: 400,
  // TURN_RADIUS: 3;
}
export const PLAYERS_START_POS = [[STARTING_POS_CUSHION, STARTING_POS_CUSHION], // top left
                  [DIM_X - STARTING_POS_CUSHION, DIM_Y - STARTING_POS_CUSHION], // bottom right
                  [DIM_X - STARTING_POS_CUSHION, STARTING_POS_CUSHION], // top right
                  [STARTING_POS_CUSHION, DIM_Y - STARTING_POS_CUSHION], // bottom left
];

// Starting Directions (Angles)
// clockwise ->
export const PLAYERS_START_DIR = [0, 180, 90, 270];

