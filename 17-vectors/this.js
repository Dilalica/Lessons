const speed = 1;


class Circle{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    move(){
        this.x += speed;
    }
}


let circle1 = new Circle(19, 29);
let circle2 = new Circle(20, 1);


obj = {
    x: 1,
    y: 2
}