function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(1, 43, 46);
  translate(height/2,width/2);
  noFill();
  rotate(-90)
  
  let sec = second();
  let min = minute();
  let hr  =   hour();
  
  strokeWeight(35);
  
  stroke(100,200,100);
  arc(0,0,500,500,0, hr * 30);
  
  stroke(50,75,200);
  arc(0,0,400,400,0, min* 6);
  
  stroke(150,50,150);
  arc(0,0,300,300,0, sec*6);
  
  rotate(90)
  
  textSize(38);
  textAlign(CENTER);
  strokeWeight(2);
  fill(252, 140, 3, 200)
  noStroke()
  text(hr + " : " + min +" : "+ sec , 0 ,0)
  
}