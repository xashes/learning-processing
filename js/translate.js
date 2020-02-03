new p5();

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}

function draw() {
    background(255);
    let mx = constrain(mouseX, 0, width);
    let my = constrain(mouseY, 0, height);

    translate(mx, my);
    ellipse(0, 0, 20, 20);

    translate(100, 0);
    ellipse(0, 0, 20, 20);

    translate(0, 100);
    ellipse(0, 0, 20, 20);

    translate(-100, 0);
    ellipse(0, 0, 20, 20);

}
