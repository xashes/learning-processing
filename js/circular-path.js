new p5();

let r = 0;
let theta = 0;

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    background(255);
}


function draw() {
    let x = r * cos(theta);
    let y = r * sin(theta);
    noStroke();
    fill(r % 255);
    ellipse(x + width/2, y + height/2, 10, 10);
    theta += PI/360;
    r += 0.05;
}

