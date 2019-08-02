new p5();

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}


function draw() {
    let r = map(mouseX, 0, width, 0, 255);
    let b = map(mouseY, 0, height, 255, 0);
    background(r, 0, b);
}
