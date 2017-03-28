const Game = require('./game');

$(function () {
  const rootEl = $('.game');
  new Game(rootEl);
});
