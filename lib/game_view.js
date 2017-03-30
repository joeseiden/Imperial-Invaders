class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.playerShip = this.game.addPlayerShip();
    this.enemies = this.game.addEnemies();
  }

  bindKeyHandlers() {
    const playerShip = this.playerShip;

    document.addEventListener('keydown', (e) => {
      const keyName = event.key;
      if (keyName === "ArrowLeft") {
        playerShip.thruster("left");
      } else if (keyName === "ArrowRight") {
        playerShip.thruster("right");
      }
    });

    document.addEventListener('keyup', (e) => {
      const keyName = event.key;

      if (keyName === "ArrowLeft" || keyName === "ArrowRight") {
        playerShip.thruster("stop");
      }
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
