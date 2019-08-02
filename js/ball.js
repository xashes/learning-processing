new p5();

let ball = [];

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    for (var i = 0; i < 3; i++) {
        ball[i] = new Ball(32);
    }
}


function draw() {
    background(255);
    for (var i = 0; i < ball.length; i++) {
        ball[i].move();
        ball[i].display();
    }

}

class Ball {
    constructor(r, x=random(r, width), y=random(r, height), speedX=random(3, 6), speedY=random(3, 6)) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    move() {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > width - this.r || this.x < this.r) {
            this.speedX = this.speedX * -1;
        }
        if (this.y > height - this.r || this.y < this.r) {
            this.speedY = this.speedY * -1;
        }
    }
    display() {
        stroke(0);
        fill(175);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}
