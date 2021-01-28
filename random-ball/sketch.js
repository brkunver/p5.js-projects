// Burakhan unver 28.01.2021
let y  = 50 ;
let y1 = 5 ;

let x  = 200;
let x1 = 4;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(35);
  circle(x,y,25);
  if(y > 399)
  y1 = random(-3,-6);
  if(y < 25)
  y1 = y1 = random( 3, 6);
  
  if(x > 380)
  x1 = random(-3,-6);
  if(x < 12.5)
  x1 = random(3,  6);
  
  x = x + x1
  y = y + y1
}