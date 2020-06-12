let positions = [];
const size = 10;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    // normalMaterial();
    for(let i=0; i<1000; i++){
        positions.push({
            x: randomGaussian(0, windowWidth / 5),
            y: randomGaussian(0, windowHeight / 5),
            z: randomGaussian(-50, 300),
            rotX: random(0, 0.1),
            rotY: random(0, 0.1)
        });
    }
    console.log(positions);
    noStroke();
    ambientMaterial(255);
}

function draw(){
    background(255);
    pointLight(255, 255, 255, 0, 0, 300);

    positions.forEach(pos => {
        push();
        translate(pos.x, pos.y, pos.z);
        rotateX(frameCount * pos.rotX);
        rotateY(frameCount * pos.rotY);
        box(size);
        pop();
    });
}