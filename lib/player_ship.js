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
      pos: [this.pos[0] + 7.5, this.pos[1] - 10],
      game: this.game,
      vel: [0, -3]
    });

    this.game.add(laser);
  }

  thruster(dir) {
    this.preventOutOfBounds(this.pos);
    if (dir === "left"){
      this.vel = [-2, 0];
    } else if (dir === "right") {
      this.vel = [2, 0];
    } else if (dir === "stop"){
      this.vel = [0, 0];
    }
  }

  lightspeed() {
    this.vel[0] = 0;
    if (this.vel[1] === 0){
      this.vel[1] -= 1;
    } else {
      this.vel[1] *= 1.1;
    }
  }

  hyperdrive() {
    this.vel[1] *= 1.1;
  }

  preventOutOfBounds(pos) {
    if (pos[0] < this.game.gameBounds.left) {
      this.pos[0] = this.game.gameBounds.left;
    } else if (pos[0] > this.game.gameBounds.right) {
      this.pos[0] = this.game.gameBounds.right;
    }
  }

  draw(ctx) {
    ctx.drawImage(document.getElementById("xwing"),
                this.pos[0],
                this.pos[1],
                this.width,
                this.height);
  }
}

export default PlayerShip;
