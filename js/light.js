new p5();

function setup() {
    let myCanvas=createCanvas(1000, 800, WEBGL);
    myCanvas.parent('p5Container');
}


function draw() {
    background(0);
    //move your mouse to change light position
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    // to set the light position,
    // think of the world's coordinate as:
    // -width/2,-height/2 -------- width/2,-height/2
    //                |            |
    //                |     0,0    |
    //                |            |
    // -width/2,height/2--------width/2,height/2
    pointLight(250, 80, 150, locX, locY, 600);
    noStroke();
    sphere(80);
}

