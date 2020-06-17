
// --------------- global variables -----------------
let ctx,
    mouseX,
    mouseY,
    pmouseX,
    pmouseY,
    windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    mousedown = false;


// ----------- main function invocations ------------

// get canvas context as global variable
setup();

// invoke drawing animation for first time
draw();

// drawing animation
function draw(){
    if(mousedown){
        drawSquare();
    }
    // delay recursize loop to 60 fps
    requestAnimationFrame(draw);
}


// ------------------ user events -------------------

window.addEventListener('mousedown', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    mousedown = true;
});

window.addEventListener('mouseup', event => {
    mousedown = false;
});

// this is invoked regardless of
// whether the mouse is pressed or not
window.addEventListener('mousemove', event => {
    pmouseX = mouseX;
    pmouseY = mouseY;
    mouseX = event.clientX;
    mouseY = event.clientY;
});

window.addEventListener('resize', event => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    setup();
});


// ------------------- animation -------------------

// sets up canvas drawing in DOM
// sets resolution
// returns the canvas ctx
function setup(){
    const canvas = document.getElementById('canvas'),
          pixels = window.devicePixelRatio;

    canvas.width = windowWidth * pixels;
    canvas.height = windowHeight * pixels;

    ctx = canvas.getContext('2d');
    ctx.scale(pixels, pixels);
}

function drawSquare(){
    // size is proportional to the distance between
    // last mouse position and current mouse position.
    // This has effect of makaing faster gestures
    // render larger boxes
    const size = euclideanDistance(mouseX, mouseY, pmouseX, pmouseY),
          hue = Math.random() * 360;

    ctx.fillStyle = `hsl(${hue},100%,50%)`;
    ctx.fillRect(mouseX - (size/2), mouseY - (size/2), size, size);
}


// --------------------- math -----------------------

function euclideanDistance(x1, y1, x2, y2){
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

