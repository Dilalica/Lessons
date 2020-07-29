const speed = 3;
let circles = [];

// begin draw loop
draw();

class Circle {
    constructor(x, y){
        // instance variables
        this.x = x;
        this.y = y;

        this.div = document.createElement('div');

        // place div in DOM
        document.body.appendChild(this.div);

        // initial position
        this.div.style.left = x + 'px';
        this.div.style.top = y + 'px';
    }
    changeColor(){
        const hue = Math.random() * 360;
        this.div.style.backgroundColor = `hsl(${hue},100%,50%)`;
    }
    move(){
        this.y += speed;
        this.div.style.top = this.y + 'px';
    }
}

window.addEventListener('click', event => {
    let circle = new Circle(event.clientX, event.clientY);
    circles.push(circle);
});

function draw(){
    circles.forEach(circle => {
        // circle.changeColor();
        circle.move();
    });
    setTimeout(draw, 500);
}