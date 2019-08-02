new p5();

slides = [];

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}


function draw() {
}

class Slide {
    constructor(w=width*0.8, h=height*0.8, stroke=color(255), fill=color(255)) {
        super(arg);
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
    }

    background() {
        stroke(this.stroke);
        fill(this.fill);
        rect(width/2, height/2, this.w, this.h);
    }
}

function addSlide() {
    s = new Slide();
    slides.push(s);
}
