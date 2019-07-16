new p5();

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}


function draw() {
    background(255, 0, 0);
    noStroke();
    let step = 20;
    for (let i = 0; i < width; i += step) {
        let distance = abs(i - mouseX) / 10;
        fill(distance);
        rect(i, 0, step, height);
    }
}
