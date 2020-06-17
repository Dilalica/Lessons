
function setup(){
    createCanvas(windowWidth, windowHeight);
    floor = windowHeight;
    player = new Player();
    for(let i=0; i<1000; i++){
        stars.push(new Star());
    }
    obstacles.push(new Obstacle);
}


function draw(){
    background(255);

    stars.forEach(star => {
        star.move();
        star.draw();
    });

    player.move();
    player.draw();

    if(random() < .01){
        obstacles.push(new Obstacle);
    }

    let minFloor = windowHeight;
    obstacles.forEach(obstacle => {
        obstacle.move();
        obstacle.draw();
        if(player.right() > obstacle.left && player.left < obstacle.right()){
            if(minFloor > obstacle.top){
                minFloor = obstacle.top;
            }
        }
    });
    floor = minFloor;

    if(player.bottom() > floor){
        background('red');
    }
}


function mousePressed() {
    player.bounce();
}

