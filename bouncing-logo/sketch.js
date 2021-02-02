let xSpeed = 5
let ySpeed = 5
let x = 400,
  y = 300;
let r = 100,
  g = 100,
  b = 150;

function setup() {
  createCanvas(800, 600);
  x = random(100,400);
  y = random(100,300)
}

function pickColor() {
  r = floor(random(100, 255))
  g = floor(random(100, 255))
  b = floor(random(100, 255))
}

function draw() {
  background(50);
  textSize(50);
  fill(r, g, b);
  text("P5.JS", x, y);

  if (x + 135 > width) {
    xSpeed = -xSpeed;
    pickColor()
  }
  if (y > height) {
    ySpeed = -ySpeed;
    pickColor()
  }
  if (x < 0) {
    xSpeed = -xSpeed;
    pickColor()
  }
  if (y - 45 < 0) {
    ySpeed = -ySpeed;
    pickColor()
  }

  x += xSpeed;
  y += ySpeed;

}