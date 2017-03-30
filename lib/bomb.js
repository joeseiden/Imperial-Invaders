import MovingObject from './moving_object';
import PlayerShip from './player_ship';

const Projectile = {
  HEIGHT: 10,
  WIDTH: 5
};

class Bomb extends MovingObject {
  constructor(options) {
    options.height = Projectile.HEIGHT;
    options.width = Projectile.WIDTH;
    options.color = "#32CD32";
    super(options);
  }

  collideWith(otherObject){
    if (otherObject instanceof PlayerShip) {
      otherObject.remove();
      this.remove();
    }
  }
}

export default Bomb;
