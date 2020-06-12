function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw(){
    let diameter = dist(mouseX, mouseY, pmouseX, pmouseY);
    if(mouseIsPressed){
        circle(mouseX, mouseY, diameter);
    }
}

function mousePressed(){
    colorMode(HSB);
    let hue = random(360);
    fill(hue, 100, 100);
}