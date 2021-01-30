class Rain{
  constructor(){
    this.x = random(0,width);
    this.y = random(-300,-100);
    this.speed = random(3,5);
    this.len = random(15,25);
    this.colour = random(240,255)
  }
  
  update(){
    this.y = this.y + this.speed
    
    if(this.y > height)
      this.y =  this.y = random(-300,-100);
  }
  
  show(){
    stroke(69, 187, this.colour)
    strokeWeight(2)
    line(this.x,this.y,this.x,this.y + this.len)
  }
}