new p5();

let theta;

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    theta = 0;
}


function draw() {
    background(255);
    let x = map(sin(theta), -1, 1, 0, width);
    line(width/2, 0, x, height/2);
    ellipse(x, height/2, 20, 20);
    theta += PI/180;
}
