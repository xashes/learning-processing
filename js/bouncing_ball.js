new p5();

let ball = {
    x : ball.diameter/2,
    y : 100,
    diameter : 30,
    speed : {
        x : 10,
        y : 6
    }
};

function setup() {
    let myCanvas=createCanvas(1000, 800);
    myCanvas.parent('p5Container');
}


function draw() {
    background(255);
    fill(255, 0, 255);
    noStroke();
    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
    if (ball.x > (width - ball.diameter/2) || ball.x < ball.diameter/2) {
        ball.speed.x = -ball.speed.x;
    }
    if (ball.y < ball.diameter/2 || ball.y > height - ball.diameter/2) {
        ball.speed.y = - ball.speed.y;
    }
    x += ball.speed.x;
    y += ball.speed.y;
}
