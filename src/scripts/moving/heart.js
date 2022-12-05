import { ContextExclusionPlugin } from "webpack"


export default class Heart {
  // Steps:
  // - Add a constructor - should have an index (0, 1, 2) that will be used for relative position
  // - create an update method (pass in player position and heart #, set heart position relative to player)
  // - Add a draw method: should take ctx as param
  // -
  constructor(initialHealth, maxHealth) {
    this.health = initialHealth;
    this.maxHealth = maxHealth;
  }

  damage(points) {
    this.health = Math.max(0, this.health - points);
  }

}

