import MovingObject from './moving_object';
import Util from './util';
import Laser from './laser';

const Ship = {
  HEIGHT: 15,
  WIDTH: 15
};

class EnemyShip extends MovingObject {
  constructor(options) {
    options.height = Ship.HEIGHT;
    options.width = Ship.WIDTH;
    options.vel = [0.25, 0];
    options.color ="#FFFFFF";
    super(options);
    this.patrolX = 0;
  }

  fireLaser() {
    const laser = new Laser({
      pos: this.pos,
      game: this.game,
      vel: [0, 2]
    });

    this.game.add(Laser);
  }

  patrol() {
    this.patrolX += this.vel[0];

    if (this.patrolX <= 0 || this.patrolX > 77.5) {
      this.pos[1] += 1;
      this.vel[0] = -this.vel[0];
    }
  }
}

export default EnemyShip;
