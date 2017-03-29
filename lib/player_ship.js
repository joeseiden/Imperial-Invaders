import MovingObject from './moving_object';
import Util from './util';
import Laser from './laser';

const Ship = {
  HEIGHT: 15,
  WIDTH: 15
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
      game: this.game,
      vel: [0, -1]
    });

    this.game.add(laser);
  }

  thruster(dir) {
    if (dir === "left"){
      this.vel = [-2, 0];
    } else if (dir === "right") {
      this.vel = [2, 0];
    } else if (dir === "stop"){
      this.vel = [0, 0];
    }
  }

}

export default PlayerShip;
