new p5();

let row = 20;
let col = 20;
let grids = [];

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    for (var i = 0; i < row; i++) {
        grids[i] = [];
        for (var j = 0; j < col; j++) {
            grids[i][j] = new Cell(i*20, j*20, 20, 20, i+j);
        }
    }
}

function draw() {
    background(0);
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            grids[i][j].oscillate();
            grids[i][j].display();
        }
    }
}

class Cell {
    constructor(tempX, tempY, tempW, tempH, tempAngle) {
        this.x = tempX;  // x,y location
        this.y = tempY;
        this.w = tempW;  // width and height
        this.h = tempH;
        this.angle = tempAngle; // angle for oscillating brightness
    }

    // Oscillation means increase angle
    oscillate() {
        this.angle += 0.02;
    }

    display() {
        stroke(255);
        // Color calculated using sine wave
        var bright = map(sin(this.angle), -1, 1, 0, 255);
        fill(bright);
        rect(this.x, this.y, this.w, this.h);
    }
}
