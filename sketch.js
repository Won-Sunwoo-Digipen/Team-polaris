let s;
function setup() {
  createCanvas(670, 570);
  s = new ship();
}
function draw() {
  background(50);
  s.update();
  s.display();
}
class ship {
    constructor() {
        this.x = width/2;
        this.y = height*0.8;
    }
    update() {
        if(keyIsDown(LEFT_ARROW))
            this.x-=5;
        if (keyIsDown(RIGHT_ARROW))
            this.x+=5;
    }
    display() {
        fill(255);
        circle(this.x,this.y,20,20);
    }
}