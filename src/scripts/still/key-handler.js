export class KeyHandler {
  constructor() {
    this.actions = [
      { // Player 1
        throttle: false,
        left: false,
        brake: false,
        right: false,
        blast: false,
      },
      { // Player 2
        throttle: false,
        left: false,
        brake: false,
        right: false,
        blast: false,
      },
    ];
  }

  keyPressed(e) {
    // Player 1
    if (e.key === 'w') this.actions[0].throttle = true;
    if (e.key === 'a') this.actions[0].left = true;
    if (e.key === 's') this.actions[0].brake = true;
    if (e.key === 'd') this.actions[0].right = true;
    if (e.key === ' ') this.actions[0].blast = true;

    // Player 2
    if (e.key === 'ArrowUp') this.actions[1].throttle = true;
    if (e.key === 'ArrowLeft') this.actions[1].left = true;
    if (e.key === 'ArrowDown') this.actions[1].brake = true;
    if (e.key === 'ArrowRight') this.actions[1].right = true;
    if (e.key === 0) this.actions[1].blast = true;
  }

  keyReleased(e) {
    // e.stopPropagation();

    // Player 1
    if (e.key === 'w') this.actions[0].throttle = false;
    if (e.key === 'a') this.actions[0].left = false;
    if (e.key === 's') this.actions[0].brake = false;
    if (e.key === 'd') this.actions[0].right = false;
    if (e.key === ' ') this.actions[0].blast = false;

    // Player 2
    if (e.key === 'ArrowUp') this.actions[1].throttle = false;
    if (e.key === 'ArrowLeft') this.actions[1].left = false;
    if (e.key === 'ArrowDown') this.actions[1].brake = false;
    if (e.key === 'ArrowRight') this.actions[1].right = false;
    if (e.key === 0) this.actions[1].blast = false;
  }

  activeActions() {
    return this.actions;
  }
}
