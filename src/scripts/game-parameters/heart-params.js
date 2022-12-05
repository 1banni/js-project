import { DIM_X, DIM_Y } from "./pos-and-dim"

export const HEART_BAR = {
  WIDTH: 100,
  HEIGHT: 25,
  X: Math.floor((DIM_X * 3/4) - WIDTH),
  Y: Math.floor(DIM_Y * 1/80),
}
