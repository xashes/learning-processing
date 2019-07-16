new p5();
let zx = 0;
let zy = 400;

let r = 0;
let g = 0;
let b = 0;

let button = false;
let x = 50;
let y = 50;
let w = 100;
let h = 75;

function setup() {
    let myCanvas = createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    frameRate(30);
}

function draw() {
    if (button) {
        background(255);
    } else {
        background(0);
    }
    fill(175);
    rect(x, y, w, h);
}

function draw_zoog(x, y, px, py) {
    ellipseMode(CENTER);
    rectMode(CENTER);
    let eye_x1 = x - 19;
    let eye_x2 = x + 19;
    let eye_y = y - 30;

    let head_y = y - 30;

    let leg_x1 = x - 10;
    let leg_x2 = x + 10;
    let leg_y = y + 50;

    // Body
    stroke(0);
    fill(150);
    rect(x, y, 20, 100);

    // Head
    fill(255);
    ellipse(x, head_y, 60, 60);

    // Eyes
    fill(x % 255, 0, y % 255);
    ellipse(eye_x1, eye_y, 16, 32);
    ellipse(eye_x2, eye_y, 16, 32);

    // Legs
    stroke(0);
    line(leg_x1, leg_y, px - 20, py + 60);
    line(leg_x2, leg_y, px + 20, py + 60);
}

function mousePressed() {
    if (inRect(mouseX, mouseY, x, y, w, h) && mouseIsPressed) {
        button = !button;
        console.log(button);
    }
}

function keyPressed() {
    if (key == 'c') {
        background(255, 0, 0, 255);
    }
}

function inRect(x, y, rx, ry, w, h) {
    return (x >= rx) && (x <= rx + w) && (y >= ry) && (y <= ry + h);
}
