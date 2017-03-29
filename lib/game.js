import PlayerShip from './player_ship';
import Laser from './laser';
import Util from './util';
import Asteroid from './asteroid';

class Game {
  constructor() {
    this.asteroids = [];
    this.playerShips = [];
    this.lasers = [];
    this.enemies = [];
  }

  add(object) {
    if (object instanceof Asteroid) {
      this.asteroids.push(object);
    } else if (object instanceof Laser && this.lasers.length === 0) {
      this.lasers.push(object);
    } else if (object instanceof PlayerShip) {
      this.playerShips.push(object);
    }
  }

  addPlayerShip () {
    const playerShip = new PlayerShip({
      pos: this.startPosition(),
      game: this
    });

    this.add(playerShip);

    return playerShip;
  }

  startPosition () {
    return [
      Game.DIM_X / 2,
      480
    ];
  }

  allObjects() {
    return [].concat(this.playerShips, this.asteroids, this.lasers);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i=0; i < allObjects.length; i++) {
      for (let j=0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }

  draw(ctx) {
    const pattern = ctx.createPattern(Game.BG, 'no-repeat');
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fill();

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

}

Game.BG = document.getElementById("starfield");
Game.DIM_Y = 500;
Game.DIM_X = 400;

export default Game;
