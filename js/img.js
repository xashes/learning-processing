new p5();

let img;

function preload(arg) {
    img = loadImage('js/shanshui.jpeg');
}


function setup() {
    let myCanvas=createCanvas(img.width/2, img.height/2);
    myCanvas.parent('p5Container');
}


function draw() {
    image(img, 0, 0, width, height);
}

