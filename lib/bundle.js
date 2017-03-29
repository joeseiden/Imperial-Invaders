/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Util = {
  dir: function dir(vec) {
    var norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  },
  dist: function dist(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
  },
  norm: function norm(vec) {
    return Util.dist([0, 0], vec);
  },
  scale: function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

exports.default = Util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(2);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Laser = function (_MovingObject) {
  _inherits(Laser, _MovingObject);

  function Laser(options) {
    _classCallCheck(this, Laser);

    options.height = Projectile.HEIGHT;
    options.width = Projectile.WIDTH;

    return _possibleConstructorReturn(this, (Laser.__proto__ || Object.getPrototypeOf(Laser)).call(this, options));
  }

  _createClass(Laser, [{
    key: 'checkOutOfBounds',
    value: function checkOutOfBounds() {}
  }]);

  return Laser;
}(_moving_object2.default);

var Projectile = {
  HEIGHT: 7,
  WIDTH: 3
};

exports.default = Laser;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject = function () {
  function MovingObject(options) {
    _classCallCheck(this, MovingObject);

    this.pos = options.pos;
    this.vel = options.vel;
    this.width = options.width;
    this.height = options.height;
    this.color = options.color;
    this.game = options.game;
  }

  _createClass(MovingObject, [{
    key: 'collideWith',
    value: function collideWith(otherObject) {}
  }, {
    key: 'draw',
    value: function draw(ctx) {
      ctx.fillStyle = this.color;

      ctx.beginPath();
      ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
  }, {
    key: 'isCollidedWith',
    value: function isCollidedWith(otherObject) {
      var centerDist = _util2.default.dist(this.pos, otherObject.pos);
      if (centerDist < this.width + otherObject.width || centerDist < this.height + otherObject.height) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'move',
    value: function move(timeDelta) {
      var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
          offsetX = this.vel[0] * velocityScale,
          offsetY = this.vel[1] * velocityScale;

      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.game.remove(this);
    }
  }]);

  return MovingObject;
}();

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;

exports.default = MovingObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player_ship = __webpack_require__(7);

var _player_ship2 = _interopRequireDefault(_player_ship);

var _enemy_ship = __webpack_require__(8);

var _enemy_ship2 = _interopRequireDefault(_enemy_ship);

var _laser = __webpack_require__(1);

var _laser2 = _interopRequireDefault(_laser);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _asteroid = __webpack_require__(5);

var _asteroid2 = _interopRequireDefault(_asteroid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.asteroids = [];
    this.playerShips = [];
    this.lasers = [];
    this.enemies = [];
  }

  _createClass(Game, [{
    key: 'add',
    value: function add(object) {
      if (object instanceof _asteroid2.default) {
        this.asteroids.push(object);
      } else if (object instanceof _laser2.default && this.lasers.length === 0) {
        this.lasers.push(object);
      } else if (object instanceof _player_ship2.default) {
        this.playerShips.push(object);
      }
    }
  }, {
    key: 'addPlayerShip',
    value: function addPlayerShip() {
      var playerShip = new _player_ship2.default({
        pos: this.startPosition(),
        game: this
      });

      this.add(playerShip);

      return playerShip;
    }
  }, {
    key: 'startPosition',
    value: function startPosition() {
      return [Game.DIM_X / 2, 480];
    }
  }, {
    key: 'allObjects',
    value: function allObjects() {
      return [].concat(this.playerShips, this.asteroids, this.lasers);
    }
  }, {
    key: 'checkCollisions',
    value: function checkCollisions() {
      var allObjects = this.allObjects();
      for (var i = 0; i < allObjects.length; i++) {
        for (var j = 0; j < allObjects.length; j++) {
          var obj1 = allObjects[i];
          var obj2 = allObjects[j];

          if (obj1.isCollidedWith(obj2)) {
            var collision = obj1.collideWith(obj2);
            if (collision) return;
          }
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var pattern = ctx.createPattern(Game.BG, 'no-repeat');
      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
      ctx.fill();

      this.allObjects().forEach(function (object) {
        object.draw(ctx);
      });
    }
  }, {
    key: 'isOutOfBounds',
    value: function isOutOfBounds(pos) {
      return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;
    }
  }, {
    key: 'step',
    value: function step(delta) {
      var _this = this;

      this.moveObjects(delta);
      this.checkCollisions();
      this.lasers.forEach(function (laser) {
        if (_this.isOutOfBounds(laser.pos)) {
          _this.remove(laser);
        }
      });
    }
  }, {
    key: 'moveObjects',
    value: function moveObjects(delta) {
      this.allObjects().forEach(function (object) {
        object.move(delta);
      });
    }
  }, {
    key: 'remove',
    value: function remove(object) {
      if (object instanceof _laser2.default) {
        this.lasers.splice(this.lasers.indexOf(object), 1);
      } else if (object instanceof _player_ship2.default) {
        this.playerShips.splice(this.playerShips.indexOf(object), 1);
      } else if (object instanceof _enemy_ship2.default) {
        this.enemies.splice(this.enemies.indexOf(object), 1);
      }
    }
  }]);

  return Game;
}();

Game.BG = document.getElementById("starfield");
Game.DIM_Y = 500;
Game.DIM_X = 400;

exports.default = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.game = game;
    this.playerShip = this.game.addPlayerShip();
  }

  _createClass(GameView, [{
    key: "bindKeyHandlers",
    value: function bindKeyHandlers() {
      var playerShip = this.playerShip;

      document.addEventListener('keydown', function (e) {
        var keyName = event.key;
        if (keyName === "ArrowLeft") {
          playerShip.thruster("left");
        } else if (keyName === "ArrowRight") {
          playerShip.thruster("right");
        }
      });

      document.addEventListener('keyup', function (e) {
        var keyName = event.key;

        if (keyName === "ArrowLeft" || keyName === "ArrowRight") {
          playerShip.thruster("stop");
        }
      });

      key("space", function () {
        playerShip.fireLaser();
      });
    }
  }, {
    key: "start",
    value: function start() {
      this.bindKeyHandlers();
      this.lastTime = 0;
      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: "animate",
    value: function animate(time) {
      var timeDelta = time - this.lastTime;

      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      this.lastTime = time;

      requestAnimationFrame(this.animate.bind(this));
    }
  }]);

  return GameView;
}();

GameView.MOVES = {
  left: "left",
  right: "right"
};

exports.default = GameView;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Asteroid = function Asteroid() {
  _classCallCheck(this, Asteroid);
};

exports.default = Asteroid;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(3);

var _game2 = _interopRequireDefault(_game);

var _game_view = __webpack_require__(4);

var _game_view2 = _interopRequireDefault(_game_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById('game');
  canvasEl.width = _game2.default.DIM_X;
  canvasEl.height = _game2.default.DIM_Y;

  var ctx = canvasEl.getContext('2d');
  var game = new _game2.default();
  new _game_view2.default(game, ctx).start();
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(2);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _laser = __webpack_require__(1);

var _laser2 = _interopRequireDefault(_laser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ship = {
  HEIGHT: 15,
  WIDTH: 15
};

var PlayerShip = function (_MovingObject) {
  _inherits(PlayerShip, _MovingObject);

  function PlayerShip(options) {
    _classCallCheck(this, PlayerShip);

    options.height = Ship.HEIGHT;
    options.width = Ship.WIDTH;
    options.vel = options.vel || [0, 0];
    options.color = "#FFFFFF";
    return _possibleConstructorReturn(this, (PlayerShip.__proto__ || Object.getPrototypeOf(PlayerShip)).call(this, options));
  }

  _createClass(PlayerShip, [{
    key: 'fireLaser',
    value: function fireLaser() {

      var laser = new _laser2.default({
        pos: this.pos,
        game: this.game,
        vel: [0, -3]
      });

      this.game.add(laser);
    }
  }, {
    key: 'thruster',
    value: function thruster(dir) {
      if (dir === "left") {
        this.vel = [-2, 0];
      } else if (dir === "right") {
        this.vel = [2, 0];
      } else if (dir === "stop") {
        this.vel = [0, 0];
      }
    }
  }]);

  return PlayerShip;
}(_moving_object2.default);

exports.default = PlayerShip;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map