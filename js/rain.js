new p5();

let rain = [];

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    // for (var i = 0; i < 100; i++) {
    //     rain[i] = new Drop(random(width), 0, random(6));
    // }
}


function draw() {
    background(0);
    if (rain.length < 10) {
        rain.push(new Drop(random(width), 0, random(1, 3)));
    }
    for (var i = 0; i < rain.length; i++) {
        noStroke();
        fill(color(255, 255, 255)); //, rain[i].speed*255/6));
        rain[i].move();
        rain[i].display();
        if (rain[i].y > height) {
            rain.splice(i, 1);
        }
    }
    textSize(36);
    text(rain.length, width*0.9, height*0.1);
}

class Drop {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    move() {
        this.y = this.y + this.speed;
    }

    display() {
        ellipse(this.x, this.y, 10*this.speed, 10*this.speed);
    }
}
