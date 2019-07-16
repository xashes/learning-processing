new p5();

let endY;

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
    frameRate(5);

    endY = 10;
}


function draw() {
    background(255);

    for (let y = 0; y < endY; y += 10) {
        stroke(0);
        line(0, y, width, y);
    }

    endY += 10;
}
