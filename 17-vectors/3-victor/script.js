const speed = 3;
let circles = [];

// begin draw loop
draw();

class Circle {
    constructor(x, y){
        // instance variables
        this.position = new Victor(x, y);
        this.direction = new Victor(1, 1);

        const deg = Math.random() * 360;
        this.direction.rotateDeg(deg);

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
            this.direction.invertY();
            if(y > h){
                this.position.y = h;
                this.direction.limit(1, .8);
            }
        }
        if(x > w || x < 0){
            this.direction.invertX();
        }

        // gravity
        this.direction.y += .03;

        // update x, y position
        this.position.add(this.direction);

        // this.position.x += this.direction.x;
        // this.position.y += this.direction.y;

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