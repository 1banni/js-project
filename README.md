# Hover Duel

Hover Duel is an arena demolition game where the goal is to pop/destroy your opponents’ balloons (lives) before your own balloons are popped. The game is similar to Mario Kart’s Battle Mode ([https://www.mariowiki.com/Battle_Mode](https://www.mariowiki.com/Battle_Mode)). The user can drive around the grid with WASD, fire projectiles at opponents and perform other moves with other keys. Players will lose health when hit by projectiles. Currently, the game is 2-player with no CPUs.

The user’s perspective will be a fixed aerial view of the map. While appearing 2D, the map will have ramps and/or bridges and sections that are higher, lower, or seperated from others. The mouse is not be utilized outside of menu navigation.


## Functionality & MVPs
This game includes the following features:
- Drive around the map in go carts with WASD (Player 1) and IJKL (Player 2)
  - Physics: acceleration/decleration, turn radius impacted by speed, etc.
- Players shoot projectiles that bounce off of walls / expire over time
- Rounds of spawning perks (ammo + health) that players can drive over to acquire
- Collision detection (projectiles colliding with go carts, walls, and other map objects)
- Meters that represent players' remaining health and ammunition


## Screenshot
![Screenshot](hover-duel-screenshot-1.png)


## Implementation Timeline
- Friday Afternoon: Setup project (repo, webpack, etc.). Get canvas, players, and map objects to show up on the screen.

- Weekend: Implement keyup/keydown events to make players' cars move. Work on finding/creating graphics for animating the game. Construct game map class. Begin collision detection & response.

- Monday: Resume work on collision detection/response. Create projectiles class - have them spawn on the map and be added to a player's inventory upon contact. allow player to shoot and let projectiles bounce wall to wall, expiring after a certain time. Have projectiles (1) damage player and (2) disappear upon contact with players

- Tuesday: Create all view objects that aren't the game canvas (start/restart buttons, navigation menu)

- Wednesday: Build perks in (similar to projectiles). Finish any gaiting items, and  tweak/improve functionality where appropriate.

- Thursday: Deploy to GitHub pages. Convert proposal README to production README if time allows.













