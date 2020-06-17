let boxes = [];
const volume = 10;
const quantity = 1000;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    // normalMaterial();
    for(let i=0; i<quantity; i++){
        boxes.push({
            x: randomGaussian(0, windowWidth / 5),
            y: randomGaussian(0, windowHeight / 5),
            z: randomGaussian(-50, 300),
            rotX: random(0, 0.1),
            rotY: random(0, 0.1)
        });
    }
    console.log(boxes);
    noStroke();
    ambientMaterial(255);
}

function draw(){
    background(255);

    // 3d spaces feature lightsources
    // this light is white and in the center of x and y
    // but slightly towards the front in z
    pointLight(255, 255, 255, 0, 0, 300);

    boxes.forEach(b => {
        // the p5 push() and pop() functions allow us to
        // rotate and resize each box without affecting
        // the entire scene 
        push();
        translate(b.x, b.y, b.z);
        rotateX(frameCount * b.rotX);
        rotateY(frameCount * b.rotY);
        box(volume);
        pop();
    });
}