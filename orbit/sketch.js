let bg, earth, moon, sun;
let e, m;

function preload() {
  bg = loadImage('bgp.jpg');
  earth = loadImage('earth.png');
  moon = loadImage('moon.png');
  sun = loadImage('sun.png');
}

function setup() {
  createCanvas(750, 500);
  angleMode(DEGREES);

}

function draw() {
  background(bg);
  
  drawSun()
  let a = drawEarth()
  drawMoon(a)
 
}


function drawMoon(pos){
  let z = p5.Vector.fromAngle(millis() / 200, 100)
  push()
  imageMode(CENTER)
  moon.resize(25, 0)
  translate(pos.x +375,pos.y + 280)
  image(moon, z.x, z.y)
  pop()
}

function drawEarth() {
  push()
  imageMode(CENTER)
  earth.resize(100, 0)
  translate(375,250)
  let v = p5.Vector.fromAngle(millis() / 1200, 200)
  image(earth, v.x, v.y)
  pop()
  return v
}


function drawSun() {
  push()
  imageMode(CENTER)
  sun.resize(200, 0)
  image(sun, width / 2, height / 2)
  pop()
}