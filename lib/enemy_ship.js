import MovingObject from './moving_object';
import Util from './util';
import Bomb from './bomb';

const Ship = {
  HEIGHT: 20,
  WIDTH: 20
};

class EnemyShip extends MovingObject {
  constructor(options) {
    options.height = Ship.HEIGHT;
    options.width = Ship.WIDTH;
    options.vel = [0, 0];
    options.color ="#FFFFFF";
    super(options);
    this.patrolX = 0;
  }

  dropBomb() {
    const bomb = new Bomb({
      pos: [this.pos[0] + 7.5, this.pos[1] + 10],
      game: this.game,
      vel: [0, 2]
    });

    this.game.add(bomb);
  }

  patrol() {
    if(this.vel[0] === 0) {
      this.vel[0] = 0.25;
    }

    this.patrolX += this.vel[0];

    if (this.patrolX <= 0 || this.patrolX >= 40) {
      this.pos[1] += 2;
      this.vel[0] = -this.vel[0];
    }
  }

  explode() {

  }

  draw(ctx) {
    ctx.drawImage(document.getElementById("tiefighter"),
                this.pos[0],
                this.pos[1],
                this.width,
                this.height);
  }
}

export default EnemyShip;
