new p5();

let rain;
let totalDrops = 5;
let catcher;
let timer;

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    catcher = new Catcher(32);
    rain = [];
    timer = new Timer(1000);
    timer.start();
}


function draw() {
    background(255);
    catcher.setLocation(mouseX, mouseY);
    catcher.display();
    if (timer.isFinished()) {
        let drop = new Drop();
        rain.push(drop);
        timer.start();
    }
    for (var i = 0; i < rain.length; i++) {
        if (rain[i].reachedBottom()) {
            rain.splice(i, 1);
        } else if (catcher.intersect(rain[i])) {
                rain.splice(i, 1);
        } else {
            rain[i].move();
            rain[i].display();
        }
    }

    textSize(36);
    text(rain.length, width*0.9, height*0.1);
}

class Drop {
    constructor() {
        this.r = 10;
        this.x = random(width);
        this.y = -2 * this.r;
        this.speed = random(1, 6);
        this.color = color(50, 100, 150);
    }

    move() {
        this.y += this.speed;
    }

    reachedBottom() {
        if (this.y > (height + this.r)) {
            return true;
        } else {
            return false;
        }
    }

    caught() {
        this.speed = 0;
        this.y = height + 2*this.r;
    }

    display() {
        fill(this.color);
        noStroke();
        for (var i = 2; i < this.r; i++) {
            ellipse(this.x, this.y + 4*i, i*2, i*2);
        }
    }
}

class Catcher {
    constructor(r) {
        this.r = r;
        this.x = 0;
        this.y = 0;
        this.color = color(50, 10, 10, 150);
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        stroke(0);
        fill(this.color);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    intersect(d) {
        let distance = dist(this.x, this.y, d.x, d.y);
        if (distance < this.r + d.r) {
            return true;
        } else {
            return false;
        }
    }
}

class Timer {
    constructor(totalTime) {
        this.totalTime = totalTime;
        this.savedTime = 0;
    }

    start() {
        this.savedTime = millis();
    }

    isFinished() {
        let passedTime = millis() - this.savedTime;
        if (passedTime > this.totalTime) {
            return true;
        } else {
            return false;
        }
    }
}
