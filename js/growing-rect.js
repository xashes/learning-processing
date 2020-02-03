new p5();

let r = 0;

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}

function draw() {
    background(255);
    noStroke();
    fill(0);
    rectMode(CENTER);
    rect(width/2, height/2, r % 600, r % 400);
    r++;
}
