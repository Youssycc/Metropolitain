let bg;

function preload() {
  bg = loadImage('./background.svg');
}

function setup() {
  createCanvas(700, 700);
  background(bg);
}

function draw() {
  noFill();
  stroke("#2980b9");
  strokeCap(ROUND);
  strokeWeight(5)
  beginShape();
  curveVertex(40, 40); // the first control point
  curveVertex(40, 40); // is also the start point of curve
  curveVertex(80, 60);
  curveVertex(100, 100);
  curveVertex(60, 120);
  curveVertex(50, 150); // the last point of curve
  curveVertex(50, 150); // is also the last control point
  endShape();
}
