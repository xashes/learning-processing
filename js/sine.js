new p5();

let r = 100;
let theta = 0;

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}

function draw() {
    background(255);
    // theta += 0.02;
    noStroke();
    fill(0);
    let angle = theta;
    for (var i = 0; i <= width; i++) {
        let y = map(sin(angle), -1, 1, height * 0.75, height * 0.25);
        ellipse(i, y, 16, 16);
        angle += 0.01;
    }
}
