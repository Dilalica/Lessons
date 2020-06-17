class Obstacle {
    constructor() {
        this.height = round(random(windowHeight / 8, windowHeight / 6));
        this.width = round(random(windowWidth / 10, windowWidth / 2));
        this.left = windowWidth;
        this.top = windowHeight - this.height;
    }
    move() {
        this.left -= speed;
    }
    right() {
        return this.left + this.width;
    }
    draw() {
        stroke(0);
        fill('white');
        rect(this.left, this.top, this.width, this.height);
    }
}



class Star {
    constructor() {
        this.size = random(1, 4);
        this.left = random(0, windowWidth);
        this.top = random(0, windowHeight);
    }
    move() {
        this.left -= this.size / 4;
        if(this.left < 0){
            this.left = windowWidth;
        }
    }
    draw() {
        stroke(0);
        fill('white');
        square(this.left, this.top, this.size);
    }
}



class Player {
    constructor() {
        this.width = 50;
        this.height = 70;
        this.left = windowWidth / 3;
        this.top = floor - this.height;

        this.velocity = 0;
    }
    right() {
        return this.left + this.width;
    }
    bottom() {
        return this.top + this.height;
    }
    bounce() {
        // move up a little so if statement in
        // loop doesn't evaluate to false
        this.top -= 1;
        // this is unnecessarily complicated...
        this.velocity = - log(floor) * 7.5;
    }
    move() {
        if(this.bottom() < floor){
            this.velocity += gravity;
            this.top += this.velocity
        }
        // important not to use else to catch
        if(this.bottom() >= floor){
            this.velocity = 0;
            this.bouncing = false;
            this.top = floor - this.height;
        }
    }
    draw() {
        noStroke();
        fill('red');
        rect(this.left, this.top, this.width, this.height);
    }
}
