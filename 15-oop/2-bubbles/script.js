let bubbles = [];

class Bubble {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 1;
    }
    move(){
        this.y += random(-1, 1);
        this.x += random(-1, 1);
        this.size += 0.05;
    }
}

// p5.js will invoke setup before draw
function setup(){
    createCanvas(windowWidth, windowHeight);
}

// draw will be invoked at 60fps unless otherwise specified
function draw(){
    background(255);
    if(mouseIsPressed){
        let bubble = new Bubble(mouseX, mouseY);
        bubbles.push(bubble);
    }
    bubbles.forEach(bubble => {
        bubble.move();
        circle(bubble.x, bubble.y, bubble.size);
    });
}