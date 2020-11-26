/* global c, h, w */

/**
 * Player
 */
const Player = function Player() {
  const self = this;

  this.img = document.getElementById('Asset-Img-Player');
  this.hit = false;
  this.hitBox = 120; // Hit box size (size + vector)
  this.s = 20; // Visible size
  this.x = 0;
  this.y = 0;
  this.angle = 0;
  this.dx = 4 * (Math.random() - 0.5);
  this.dy = 4 * (Math.random() - 0.5);
  this.da = 10 * (Math.random() - 0.5);

  // ------------------------------------------------------------------------------------------------------ Initialize

  /**
   * Initialize.
   */
  this.init = (options) => {
    self.x = options.x || 0;
    self.y = options.y || 0;
    self.s = options.s || 20;
    self.dx = options.dx || 4 * (Math.random() - 0.5);
    self.dy = options.dy || 4 * (Math.random() - 0.5);
    self.da = options.da || 10 * (Math.random() - 0.5);
  };

  // ------------------------------------------------------------------------------------------------------------ Move

  /**
   * Move object.
   */
  this.move = () => {
    /* eslint no-multi-assign: "off" */

    const x = (self.x += self.dx);
    const y = (self.y += self.dy);
    const { s } = self;

    // Bounce of the walls from object corner.
    // x    = object center
    // x+10 = object corner (half width)

    if (
      x < s / 2 || // x < 10 // left border
      x + s / 2 > w
    ) {
      // x + 10 > 800 // right border
      self.dx *= -1;
      self.da *= -1;
    }

    if (
      y < s / 2 || // y < 10 // top border
      y + s / 2 > h
    ) {
      // < + 10 > 500 // bottom border
      self.dy *= -1;
      self.da *= -1;
    }

    self.angle += self.da;

    return self;
  };

  /**
   * Test if player sees/can hit an enemy.
   */
  this.hitTest = (enemies) => {
    const { x } = self;
    const { y } = self;

    for (let i = 0; i < enemies.length; i++) {
      const diffX = enemies[i].x - x;
      const diffY = enemies[i].y - y;
      const dist = Math.sqrt(diffX * diffX + diffY * diffY) | 0;

      // dist < 10: Make it easier to hit very small enemies
      if (dist < self.s || dist < 10) {
        enemies[i].takeHit();
      }
    }
  };

  /**
   * Draw object.
   */
  this.draw = () => {
    const { s } = self;

    c.save();
    c.translate(self.x, self.y);

    if (activeTools.image) {
      c.drawImage(self.img, -48 / 2, -48 / 2);
    } else {
      c.strokeStyle = 'rgba(0, 0, 0, 1)';
      c.beginPath();
      c.arc(0, 0, s, 0, 2 * Math.PI);
      c.stroke();
    }

    if (activeTools.pivot) {
      drawHelperPoint(c, 0, 0);
    }

    if (activeTools.boundingBox) {
      drawBoundingBox(c, 0, 0, self.hitBox);
    }

    c.restore();

    if (activeTools.directionVector) {
      drawDirectionVector(c, self.x, self.y, self.dx, self.dy, s + 10);
    }

    if (activeTools.rotationVector) {
      drawRotationVector(c, self.x, self.y, self.angle, s);
    }

    return self;
  };
};
