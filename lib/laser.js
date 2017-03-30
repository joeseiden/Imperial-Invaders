import MovingObject from './moving_object';
import EnemyShip from './enemy_ship';

class Laser extends MovingObject {
  constructor(options) {
    options.height = Projectile.HEIGHT;
    options.width = Projectile.WIDTH;

    super(options);
  }

  collideWith(otherObject){
    if (otherObject instanceof EnemyShip) {
      otherObject.remove();
      this.remove();
    }
  }
}

const Projectile = {
  HEIGHT: 8,
  WIDTH: 4
};

export default Laser;
