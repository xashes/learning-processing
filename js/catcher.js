class Catcher {
    constructor(r, x=width/2, y=height) {
        this.r = r;
        this.x = x;
        this.y = y;
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        stroke(0);
        fill(175);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}
