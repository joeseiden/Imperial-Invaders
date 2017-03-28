class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.playerShip = this.game.addPlayerShip();
  }

  bindKeyHandlers() {
    const playerShip = this.playerShip;

    Object.keys(GameView.MOVES).forEach((k) => {
      let move = GameView.MOVES[k];
      key(k, () => { playerShip.power(move); });
    });

    key("space", () => { playerShip.fireLaser(); });
  }
}
