new p5();

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}


function draw() {
    background(255);
    let point = {
        x: mouseX,
        y: mouseY
    };

    let len = points.push(point);

    if (len > 50) {
        points.splice(0, 1);
    }

    for (let i = 0; i < points.length; i++) {
        noStroke();
        fill(255 - i*5);
        ellipse(points[i].x, points[i].y, i/2, i/2);
    }
}

let points = [];
