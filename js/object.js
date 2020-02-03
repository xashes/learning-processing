new p5();

circle = {
    x : 0,
    y : 200,
    diameter : 50,
    r : 218,
    g : 160,
    b : 221
};

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}

function draw() {
    r = map(mouseX, 0, 1000, 0, 255);
    b = map(mouseX, 0, 1000, 255, 0);
    background(r, 0, b);
    ellipse(mouseX, circle.y, circle.diameter, circle.diameter);
    circle.x = (circle.x + Math.floor(Math.random() * 10)) % 1000;
}
