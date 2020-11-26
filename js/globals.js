/* eslint prefer-const: "off" */

// DOM and application
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
const w = canvas.width;
const h = canvas.height;
const timeStep = 50; // ms
let mouse = { x: 0, y: 0 };
let cmTID = 0; // setTimeout
let halt = true;

// GUI
const AssetEnemy = document.getElementById('Asset-Enemy');
const AssetPlayer = document.getElementById('Asset-Player');
const ToolPlayStop = document.getElementById('Tool-PlayStop');
const ToolPivot = document.getElementById('Tool-Pivot');
const ToolBoundingBox = document.getElementById('Tool-BoundingBox');
const ToolDirectionVector = document.getElementById('Tool-DirectionVector');
const ToolRotationVector = document.getElementById('Tool-RotationVector');
const ToolImage = document.getElementById('Tool-Image');
let activeAsset = null;
let activeTools = {
  pivot: false,
  boundingBox: false,
  rotationVector: false,
  directionVector: false,
};

// Game vars
let enemies = [];
let players = [];
