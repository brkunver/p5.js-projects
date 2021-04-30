let r = 100
let time = 0;
let ar = [];
let slider;
function setup() {
  createCanvas(800, 640);
  slider = createSlider(0.01,0.2,0.01 , 0.01)
  slider.style('width', '240px');

}

function draw() {
  let val = slider.value()
  background(0)
  fill(255)
  circle(200,320,r * 2)
  
  //Polar Coordinates
  let x = r * cos(time)
  let y = r * sin(time)
  
  fill(0,200,255)
  translate(200,320)
  circle(x,y,25)
  
  time += val;
  
  ar.unshift(y)
  
  beginShape()
  for(let i = 0 ; i < ar.length ; i++){
    noFill()
    stroke(255)
    vertex(i +200, ar[i] )
    
  }
  endShape()
  
  //Text
  noStroke()
  textSize(32);
  fill(0, 102, 153);
  text('Change Frequency', -180, 300);
  
  if(ar.length > 500){
    ar.pop()
  }
  
  
}