import MovingObject from './moving_object';

class Laser extends MovingObject {
  constructor(options) {
    options.height = Projectile.HEIGHT;
    options.width = Projectile.WIDTH;
  }
}

const Projectile = {
  HEIGHT: 3,
  WIDTH: 1
};

export default Laser;
