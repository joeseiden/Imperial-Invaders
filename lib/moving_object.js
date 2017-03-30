import Util from './util';

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.width = options.width;
    this.height = options.height;
    this.color = options.color;
    this.game = options.game;
  }

  collideWith(otherObject) {}

  draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.fillRect(
      this.pos[0], this.pos[1], this.width, this.height
    );
  }

  centerPos() {
    return [
      this.pos[0] + (this.width / 2),
      this.pos[1] + (this.height / 2)
    ];
  }

  isCollidedWith(otherObject) {
    const centerDist = Util.dist(this.centerPos(), otherObject.centerPos());
    if (centerDist < (this.width/2 + otherObject.width/2) || centerDist < (this.height/2 + otherObject.height/2)){
      return true;
    } else {
      return false;
    }
  }

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = this.vel[0] * velocityScale,
      offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
  }

  remove() {
    this.game.remove(this);
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000/60;

export default MovingObject;
