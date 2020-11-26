/**
 * Performant way to clear all canvas data but save the settings, like transformations.
 *
 * @param  c       Object  Canvas context.
 * @param  canvas  Object  Canvas object.
 */
function cleanup(c, canvas) {
  c.save();
  c.setTransform(1, 0, 0, 1, 0, 0);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.restore();
}

/**
 * Highlight point at a given coordinate.
 * Development helper for creating any drawing.
 *
 * @param  c  Object  Canvas context.
 * @param  x  Number  X coordinate.
 * @param  y  Number  Y coordinate.
 */
function drawHelperPoint(c, x, y) {
  c.save();
  c.fillStyle = 'rgba(255, 0, 0, 1)';
  c.fillRect(x - 1, y - 1, 3, 3);
  c.restore();
}

/**
 * Highlight point at a given coordinate.
 * Development helper for creating any drawing.
 *
 * @param  c     Object  Canvas context.
 * @param  x     Number  X coordinate.
 * @param  y     Number  Y coordinate.
 * @param  size  Number  Object size.
 */
function drawBoundingBox(c, x, y, size) {
  c.save();
  c.strokeStyle = 'rgba(255, 128, 0, 1)';
  c.strokeRect(x - size / 2, y - size / 2, size, size);
  c.restore();
}

/**
 * Draw movement direction vector.
 *
 * @param  c     Object  Canvas context.
 * @param  x     Number  X coordinate.
 * @param  y     Number  Y coordinate.
 * @param  dx    Number  X direction.
 * @param  dy    Number  Y direction.
 * @param  size  Number  Object size.
 */
function drawDirectionVector(c, x, y, dx, dy, size) {
  const sz = size || 20;

  c.save();
  c.translate(x, y);
  c.beginPath();
  c.strokeStyle = 'rgba(255, 0, 0, 1)';
  c.moveTo(0, 0);
  c.lineTo(dx * sz, dy * sz);
  c.stroke();
  c.restore();
}

/**
 * Draw rotation vector.
 *
 * @param  c      Object  Canvas context.
 * @param  x      Number  X coordinate.
 * @param  y      Number  Y coordinate.
 * @param  angle  Number  Rotation angle.
 * @param  size   Number  Object size.
 */
function drawRotationVector(c, x, y, angle, size) {
  /* eslint no-param-reassign: "off" */

  const sz = size || 20;

  c.save();
  c.translate(x, y);
  c.beginPath();
  c.rotate((angle * Math.PI) / 180);
  c.strokeStyle = 'rgba(255, 128, 0, 1)';
  c.moveTo(0, 0);
  c.lineTo(sz, 0);
  c.stroke();
  c.restore();
}
