const speed = 3;
let circles = [];

// begin draw loop
draw();

class Circle {
    constructor(x, y){
        // instance variables
        this.position = {
            x: x,
            y: y
        };
        this.direction = {
            x: -10,
            y: -10
        }
        this.div = document.createElement('div');

        // place div in DOM
        document.body.appendChild(this.div);

        // initial position
        this.div.style.left = x + 'px';
        this.div.style.top = y + 'px';
    }
    move(){
        let x = this.position.x,
            y = this.position.y,
            w = window.innerWidth,
            h = window.innerHeight;

        // change direction if reached edge
        if(y > h || y < 0){
            this.direction.y = -this.direction.y;
            console.log(this.direction.y, this.direction.x);
        }
        if(x > w || x < 0){
            this.direction.x = -this.direction.x;
            console.log(this.direction.y, this.direction.x);
        }

        // update x, y position
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;

        // assign new css values to top and left of div
        this.div.style.top = this.position.y + 'px';
        this.div.style.left = this.position.x + 'px';

    }
}

window.addEventListener('click', event => {
    let circle = new Circle(event.clientX, event.clientY);
    circles.push(circle);
});

function draw(){
    circles.forEach(circle => {
        circle.move();
    });
    setTimeout(draw, 1);
}