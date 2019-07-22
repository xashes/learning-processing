new p5();

let cars = [];

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    for (var i = 0; i < 100; i++) {
        cars[i] = new Car(color(i*2), 0, i*20, i);
    }
}


function draw() {
    background(255);
    for (var i = 0; i < cars.length; i++) {
        cars[i].move();
        cars[i].display();
    }
}

class Car {
    constructor(color, xpos, ypos, xspeed) {
        this.color = color;
        this.xpos = xpos;
        this.ypos = ypos;
        this.xspeed = xspeed;
    }

    display() {
        stroke(0);
        fill(this.color);
        rectMode(CENTER);
        rect(this.xpos, this.ypos, 20, 10);
    }

    move() {
        this.xpos = this.xpos + this.xspeed;
        this.xpos = this.xpos % width;
    }
}
