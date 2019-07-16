new p5();

let x = 15;
let xspeed = 10;
let y = 100;
let yspeed = 6;

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}


function draw() {
    background(255);
    fill(255, 0, 255);
    noStroke();
    ellipse(x, y, 30, 30);
    if (x > (width - 15) || x < 15) {
        xspeed = -xspeed;
    }
    if (y < 15 || y > height - 15) {
        yspeed = - yspeed;
    }
    x += xspeed;
    y += yspeed;
}
