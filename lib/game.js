import PlayerShip from './player_ship';
import EnemyShip from './enemy_ship';
import Laser from './laser';
import Bomb from './bomb';
import Util from './util';
import Asteroid from './asteroid';

class Game {
  constructor() {
    this.asteroids = [];
    this.playerShips = [];
    this.lasers = [];
    this.enemies = [];
    this.bombs = [];
    this.gameBounds = {
      left: 20,
      right: 365
    };
  }

  add(object) {
    if (object instanceof Asteroid) {
      this.asteroids.push(object);
    } else if (object instanceof Laser && this.lasers.length === 0) {
      this.lasers.push(object);
    } else if (object instanceof PlayerShip) {
      this.playerShips.push(object);
    } else if (object instanceof EnemyShip) {
      this.enemies.push(object);
    } else if (object instanceof Bomb) {
      this.bombs.push(object);
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

  addEnemies () {
    for(let i = 0; i < 40; i++) {
      let x = 30 + (i % 8) * 40;
      let y = 20 + (i % 5) * 40;

      let enemyShip = new EnemyShip({
        pos: [x, y],
        game: this
      });

      this.add(enemyShip);
    }
  }

  randomInteger (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomBombs () {
    let randIdx = this.randomInteger(0, this.enemies.length * 90) // generate numbers beyond the number of ships to account for framerate

    if (randIdx < this.enemies.length){
      let bombDropper = this.enemies[randIdx];
      bombDropper.dropBomb();
    }
  }


  startPosition () {
    return [
      Game.DIM_X / 2,
      Game.DIM_Y - 40
    ];
  }

  allObjects() {
    return [].concat(this.playerShips,
                    this.asteroids,
                    this.lasers,
                    this.enemies,
                    this.bombs);
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

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
     (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }

  step(delta) {
    this.moveObjects(delta);
    this.enemies.forEach(enemy => {
      enemy.patrol();
    });
    this.randomBombs();
    this.checkCollisions();
    this.lasers.forEach(laser => {
      if (this.isOutOfBounds(laser.pos)) {
        this.remove(laser);
      }
    });
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  remove(object) {
    if (object instanceof Laser) {
      this.lasers.splice(this.lasers.indexOf(object), 1);
    } else if (object instanceof PlayerShip) {
      this.playerShips.splice(this.playerShips.indexOf(object), 1);
    } else if (object instanceof EnemyShip) {
      this.enemies.splice(this.enemies.indexOf(object), 1);
    }
  }

}

Game.BG = document.getElementById("starfield");
Game.DIM_X = 400;
Game.DIM_Y = 400;

export default Game;
