new p5();

let col = 20;
let row = 20;
let grids = [];

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}

function draw() {
    background(255);
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            noStroke();
            fill(map(i*j, 0, 400, 0, 255));
            let rwidth = 20;
            rect(i*rwidth, j*rwidth, rwidth, rwidth);
        }
    }
}
