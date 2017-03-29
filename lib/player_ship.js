import MovingObject from './moving_object';
import Util from './util';
import Laser from './laser';

const Ship = {
  HEIGHT: 10,
  WIDTH: 10
};

class PlayerShip extends MovingObject {
  constructor(options) {
    options.height = Ship.HEIGHT;
    options.width = Ship.WIDTH;
    options.vel = options.vel || [0, 0];
    options.color = "#FFFFFF";
    super(options);
  }

  fireLaser() {

    const laser = new Laser({
      pos: this.pos,
      game: this.game
    });

    this.game.add(laser);
  }

  thruster(dir) {
    if (dir === "left"){
      this.vel = [-1, 0];
    } else if (dir === "right") {
      this.vel = [1, 0];
    }
  }

}

export default PlayerShip;
