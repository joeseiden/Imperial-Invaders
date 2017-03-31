class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.playing = this.game.playing;
    this.playerShip = this.game.addPlayerShip();
    this.enemies = this.game.addEnemies();
  }

  endScreen() {

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
    this.playing = true;
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  bindStartKeyHandler() {
    const that = this;
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 32 && this.playing === false) {
        that.start();
      }
    });
  }

  startScreen() {
    this.bindStartKeyHandler();
    const pattern = GameView.BG;
    this.ctx.clearRect(0, 0, 400, 400);
    this.ctx.fillStyle = pattern;
    this.ctx.font = "20px serif";
    this.ctx.strokeStyle = "#FFFF00";
    this.ctx.strokeText("Press Spacebar to Start", 100, 100);
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

GameView.BG = document.getElementById("starfield");

export default GameView;
