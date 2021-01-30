let rain = [];

function setup() {
  createCanvas(800, 480);
  for(let i = 0 ; i < 200 ; i++){
    rain[i] = new Rain();
  }
}

function draw() {
  background(50);
  for(let r of rain){
    r.update();
    r.show();
  }
 
}

var audio = new Audio('rSound.mp3');
audio.play();