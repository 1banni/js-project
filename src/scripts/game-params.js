

export const MAP = {
  DIM_X: 1200,
  DIM_Y: 800,
  BORDER_WIDTH: 100,
  BORDER_HEIGHT: 50,
  PLATFORM_WIDTH: 300,
  PLATFORM_HEIGHT: 200,

  PLATFORM_POS: [
    [200, 150], // 200 - 500, 150 - 350
    [200, 450], //
    [700, 150],
    [700, 450]
  ],

  COLORS: {
    BORDER: '#000000', // light grey
    GROUND: '#000000',
    PLATFORMS: 'rgba(150, 255, 255)',// '#ffea00', // '#00ee15',
    BRIDGES: '#00ffff',
    BRIDGES_SLATS_BETWEEN: '#aadddd',
    EDGES: 'rgba(150, 255, 255)' // '#ffea00' // '#00ee15'//'#fac60c'
  }
}

export const HEALTH_BAR = {
  WIDTH: 25,
  HEIGHT: MAP.DIM_Y - MAP.BORDER_HEIGHT * 2,
  PADDING: 10,
}

export const BRIDGES = {
  VERTICAL: [
    [312.5, 325],
    [812.5, 325],
  ],
  HORIZONTAL: [
    [475, 212.5]
  ],
  VERTICAL_WIDTH: 75,
  VERTICAL_HEIGHT: 150,
  HORIZONTAL_WIDTH: 250,
  HORIZONTAL_HEIGHT: 75,
}

const CUSHION = MAP.BORDER_WIDTH + 25;

export const PLAYER = {
  NUMBER: 2,
  // MAX_HEALTH: 300,
  MAX_HEALTH: 30,
  MAX_SPEED: 4, // PROOF this isn't hitting cause setVelo isn't complete
  RADIUS: 20,
  TURN_RADIUS: 0.3,
  ACCELERATION: 0.1,
  PROJECTILES: 3,
  MAX_NOS: 400,
  COLORS: ['#ff3300', '#0044ff', '#ffea00', '#0dccff', '#a000fa', 'blue', 'purple'],
  STARTING_POS: [[CUSHION, CUSHION], // top left
  [MAP.DIM_X - CUSHION, MAP.DIM_Y - CUSHION], // bottom right
  [MAP.DIM_X - CUSHION, CUSHION], // top right
  [CUSHION, MAP.DIM_Y - CUSHION]], // bottom left]
  STARTING_DIR: [0, 180, 90, 270],
};

export const PERK = {
  HEART: {
    LIFE: 40,
    MAX_COUNT: 5,
    TYPE: 0,
    SIZE: 40,
  },
  PROJ: {
    LIFE: 40,
    MAX_COUNT: 10,
    TYPE: 1,
    SIZE: 40,
  },
  NOS: {
    LIFE: 40,
    TYPE: 2,
    SIZE: 40,
  },
  SECONDS_APPEARING: 5,
  ROUND_LENGTH: 6,
  ROUNDS: {
    0: {MEDPAKS: 0, AMMO: 2, NOS: 4},
    1: {MEDPAKS: 1, AMMO: 4, NOS: 4},
    2: {MEDPAKS: 2, AMMO: 6, NOS: 4},
    3: {MEDPAKS: 1, AMMO: 5, NOS: 4},
    4: {MEDPAKS: 1, AMMO: 2, NOS: 4},
    5: {MEDPAKS: 2, AMMO: 10, NOS: 4},
    6: {MEDPAKS: 3, AMMO: 15, NOS: 4},
    7: {MEDPAKS: 8, AMMO: 40, NOS: 4},
    8: {MEDPAKS: 2, AMMO: 20, NOS: 4}
  }
}


export const PROJECTILE = {
  COLOR: '#dd0000',
  RADIUS: 15,
  DELAY: 7,
  DAMAGE: 40,
  SPEED: 8,
  // CUSHION: -10,
  CUSHION: 0,
  BOUNCES: 6
}


