class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.playerShip = this.game.addPlayerShip();
  }

  bindKeyHandlers() {
    const playerShip = this.playerShip;

    Object.keys(GameView.MOVES).forEach((k) => {
      let dir = GameView.MOVES[k];
      key(k, () => { playerShip.power(dir); });
    });

    key("space", () => { playerShip.fireLaser(); });
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.MOVES = {
  left: "left",
  right: "right"
};

export default GameView;
