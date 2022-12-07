export const DIM_X = 1200;
export const DIM_Y = 800;

export const MAP_BORDER = {
  WALL_PADDING: 50,
  PLATFORM_WIDTH: 300,
  PLATFORM_HEIGHT: 200,
};

export const PLATFORMS = [
    [200, 150], // 200 - 500, 150 - 350
    [200, 450], //
    [700, 150],
    [700, 450],
    // [200, 500],
];
// export const PLATFORM_BORDER_WIDTH = 4;

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
  SLATS: 8,
  SLATS_BETWEEN: 1,

  // HORIZONTAL: [
  //   [],
  //   [],
  // ]

}


export const MAP_COLOR = {
  BORDER: '#cccccc', // light grey
  GROUND: '#000000',
  PLATFORMS: '#00ee15',
  BRIDGES: '#00ffff',
  BRIDGES_SLATS_BETWEEN: '#aadddd',
  EDGES: '#00ee15'//'#fac60c'
};


