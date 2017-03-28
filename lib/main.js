import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded",() => {
  const canvasEl = $('#game');
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContex('2d');
  const game = new Game();
  new GameView(game, ctx).start();
});
