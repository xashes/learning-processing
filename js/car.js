new p5();

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    car = new Car(color(127), 0, 100, 6);
}


function draw() {
    background(51);
    car.move();
    car.display();
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
