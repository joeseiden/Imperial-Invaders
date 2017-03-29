import MovingObject from './moving_object';

class Laser extends MovingObject {
  constructor(options) {
    options.height = Projectile.HEIGHT;
    options.width = Projectile.WIDTH;

    super(options);
  }
}

const Projectile = {
  HEIGHT: 7,
  WIDTH: 3
};

export default Laser;
