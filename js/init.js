/**
 * Update single view frame.
 * Move all objects.
 */
function moveViewObjects() {
  let i = 0;

  for (; i < enemies.length; i++) {
    enemies[i].move();
  }

  for (i = 0; i < players.length; i++) {
    players[i].move();
  }
}

/**
 * Update single view frame.
 * Run hit tests.
 */
function hitTestObjects() {
  let i = 0;

  if (enemies.length) {
    for (; i < players.length; i++) {
      players[i].hitTest(enemies);
    }
  }
}

/**
 * Update single view frame.
 * Simply draw all objects.
 */
function drawViewObjects() {
  let i = 0;

  cleanup(c, canvas);

  for (; i < enemies.length; i++) {
    enemies[i].draw();
  }

  for (i = 0; i < players.length; i++) {
    players[i].draw();
  }
}

/**
 * Create object from active asset.
 */
function createObject(asset) {
  let obj;

  if (asset === 'Enemy') {
    obj = new Enemy();

    obj.init({
      x: mouse.x,
      y: mouse.y,
    });

    enemies.push(obj);
  } else if (asset === 'Player') {
    obj = new Player();

    obj.init({
      x: mouse.x,
      y: mouse.y,
    });

    players.push(obj);
  }

  drawViewObjects();
}

/**
 * Update view as loop (game loop).
 */
function updateViewLoop() {
  if (halt) {
    return;
  }

  moveViewObjects();
  hitTestObjects();
  drawViewObjects();

  clearTimeout(cmTID);
  cmTID = setTimeout(updateViewLoop, timeStep);
}
