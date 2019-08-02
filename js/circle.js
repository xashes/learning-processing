new p5();

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}

function draw() {
    background(255);
    stroke(0);
    noFill();
    drawCircle(width/2, height/2, 200);
}

function drawCircle(x, y, r) {
    ellipse(x, y, r*2, r*2);
    if (r > 2) {
        drawCircle(x-r, y, r/2, r/2);
        drawCircle(x+r, y, r/2, r/2);
    }
}
