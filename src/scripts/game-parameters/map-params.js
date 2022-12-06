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
    [300, 325],
    [800, 325],
  ],
  VERTICAL_WIDTH: 100,
  VERTICAL_HEIGHT: 150,

  HORIZONTAL: [
    [],
    [],
  ]

}


export const MAP_COLOR = {
  BORDER: '#333333', // light grey
  GROUND: '#000000',
  PLATFORMS: '#00ee15',
  BRIDGES: '#00ffff',
  EDGES: 'ffaaff'
};


