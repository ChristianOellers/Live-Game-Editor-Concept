/**
 * Set DOM element active state.
 */
function setActive(evt) {
  /* eslint no-param-reassign: "off" */

  if (evt.target.className === 'active') {
    evt.target.className = '';
  } else {
    evt.target.className = 'active';
  }
}

/**
 * Remove DOM element active state.
 */
function removeActiveAssets(evt) {
  AssetEnemy.className = '';
  AssetPlayer.className = '';
}

// -------------------------------------------------------------------------------------------------------------- Events

/**
 * Create object in canvas.
 */
canvas.onclick = (evt) => {
  createObject(activeAsset);
};

/**
 * This mouse coordinate implementation
 * may not be compatible to all browsers!
 */
canvas.onmousemove = (evt) => {
  mouse.x = evt.layerX;
  mouse.y = evt.layerY;
};

/**
 * Activate enemy asset.
 */
AssetEnemy.onclick = (evt) => {
  activeAsset = 'Enemy';

  removeActiveAssets();
  setActive(evt);
};

/**
 * Activate player asset.
 */
AssetPlayer.onclick = (evt) => {
  activeAsset = 'Player';

  removeActiveAssets();
  setActive(evt);
};

/**
 * Play/stop animation.
 */
ToolPlayStop.onclick = (evt) => {
  halt = !halt;

  if (!halt) {
    updateViewLoop();
  }

  setActive(evt);
};

/**
 * View display mode.
 * Show object pivot.
 */
ToolPivot.onclick = (evt) => {
  activeTools.pivot = !activeTools.pivot;

  setActive(evt);
};

/**
 * View display mode.
 * Show object bounding box (hit area).
 */
ToolBoundingBox.onclick = (evt) => {
  activeTools.boundingBox = !activeTools.boundingBox;

  setActive(evt);
};

/**
 * View display mode.
 * Show direction vectors.
 */
ToolDirectionVector.onclick = (evt) => {
  activeTools.directionVector = !activeTools.directionVector;

  setActive(evt);
};

/**
 * View display mode.
 * Show rotation vectors.
 */
ToolRotationVector.onclick = (evt) => {
  activeTools.rotationVector = !activeTools.rotationVector;

  setActive(evt);
};

/**
 * View display mode.
 * Show images.
 */
ToolImage.onclick = (evt) => {
  activeTools.image = !activeTools.image;

  setActive(evt);
};
