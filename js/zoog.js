new p5();

function setup() {
    let myCanvas = createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    frameRate(30);
    zoog = new Zoog(width/2, height/2, 60, 60, 16);
}

function draw() {
    background(51);
    // mouseX position determines speed factor
    let speedFactor = constrain(mouseX, 0, 5);
    zoog.jiggle(speedFactor);
    zoog.display();
}

class Zoog {
    constructor(x, y, w, h, eyeSize) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.eyeSize = eyeSize;
    }

    jiggle(speed) {
        this.x = this.x + random(-1, 1) * speed;
        this.y = this.y + random(-1, 1) * speed;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    display() {
        // Set ellipses and rects to CENTER mode
        ellipseMode(CENTER);
        rectMode(CENTER);

        // Draw Zoog's body
        stroke(255);
        fill(175);
        rect(this.x,this.y,this.w/6,this.h);
        // Draw Zoog's head
        stroke(255);
        fill(255);
        ellipse(this.x,this.y-this.h,this.w,this.h);
        // Draw Zoog's eyes
        fill(0);
        ellipse(this.x - this.w/3,this.y - this.h,this.eyeSize,this.eyeSize*2);
        ellipse(this.x + this.w/3,this.y - this.h,this.eyeSize,this.eyeSize*2);
        // Draw Zoog's legs
        stroke(255);
        line(this.x - this.w/12,this.y + this.h/2,this.x - this.w/4,this.y + this.h/2 + 10);
        line(this.x + this.w/12,this.y + this.h/2,this.x + this.w/4,this.y + this.h/2 + 10);
}
}



function inRect(x, y, rx, ry, w, h) {
    return (x >= rx) && (x <= rx + w) && (y >= ry) && (y <= ry + h);
}
