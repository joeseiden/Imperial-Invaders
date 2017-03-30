import MovingObject from './moving_object';
import Util from './util';
import Laser from './laser';

const Ship = {
  HEIGHT: 20,
  WIDTH: 20
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
      pos: [this.pos[0] + this.width / 2, this.pos[1]],
      game: this.game,
      vel: [0, -3]
    });

    this.game.add(laser);
  }

  thruster(dir) {
    this.preventOutOfBounds(this.pos);
    if (dir === "left"){ //needs work
      this.vel = [-2, 0];
    } else if (dir === "right") { //needs work
      this.vel = [2, 0];
    } else if (dir === "stop"){
      this.vel = [0, 0];
    }
  }

  preventOutOfBounds(pos) {
    if (pos[0] < this.game.gameBounds.left) {
      this.pos[0] = this.game.gameBounds.left;
    } else if (pos[0] > this.game.gameBounds.right) {
      this.pos[0] = this.game.gameBounds.right;
    }
  }

}

export default PlayerShip;
