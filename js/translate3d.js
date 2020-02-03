new p5();

let z = 0;

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}

function draw() {
    background(0);
    stroke(255);
    fill(100);
    rectMode(CENTER);
    translate(width/2, height/2, z);
    rect(0, 0, 20, 20);
    z++;
}
