import MovingObject from './moving_object';
import EnemyShip from './enemy_ship';

const Projectile = {
  HEIGHT: 10,
  WIDTH: 5
};

class Laser extends MovingObject {
  constructor(options) {
    options.height = Projectile.HEIGHT;
    options.width = Projectile.WIDTH;
    options.color = "#FF0000";
    super(options);
  }

  collideWith(otherObject){
    if (otherObject instanceof EnemyShip) {
      otherObject.remove();
      this.remove();
    }
  }
}


export default Laser;
