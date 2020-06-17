
// --------------- global variables -----------------
let ctx,
    amount,
    mouseX,
    mouseY,
    mousedown = false,
    spacedown = false,
    margin = 100;

// ------------------ user events -------------------

// get canvas context as global variable
setup();
// invoke drawing animation
draw();


// ------------------ user events -------------------

window.addEventListener('mousedown', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    mousedown = true;
});

window.addEventListener('mouseup', event => {
    mousedown = false;
});

window.addEventListener('mousemove', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

window.addEventListener('resize', event => {
    setup();
});

window.addEventListener('keydown', event => {
    if(event.which == '32'){
        spacedown = true;
    }
});

window.addEventListener('keyup', event => {
    if(event.which == '32'){
        spacedown = false;
    }
    if(event.which == '13'){
        randomSquares();
    }
});



// ------------------- animation -------------------



// sets up canvas drawing in DOM
// sets resolution
// returns the canvas ctx
function setup(){
    const width = window.innerWidth,
          height = window.innerHeight,
          canvas = document.getElementById('canvas'),
          pixels = window.devicePixelRatio;

    canvas.width = width * pixels;
    canvas.height = height * pixels;

    ctx = canvas.getContext('2d');
    ctx.scale(pixels, pixels);

    amount = Math.sqrt(width ** 2 + height ** 2);
}

// drawing animation
function draw(){
    if(mousedown && spacedown){
        drawLargeSquares();
    } else if(mousedown){
        drawSmallSquares();
    }
    requestAnimationFrame(draw);
}




function drawSmallSquares(){
    for(let i=0; i<amount; i++){
        const x = randomGaussian(mouseX, window.innerWidth / 20),
              y = randomGaussian(mouseY, window.innerHeight / 20);

        if(isOutsideMargin(x,y)) continue;

        let size = euclideanDistance(mouseX, mouseY, x, y);
        // create an inverse relationship between
        // distance from center of click event
        // and size of square
        size = (1 / Math.log(size)) * 4;
        // if size is negative, number will be very large
        if(size > 0 && size < 20){
            if(Math.random() < 0.1){
                ctx.fillStyle = 'white';
            }else{
                const hue = random(-30, 70),
                      lightness = randomInt(80, 100);
                ctx.fillStyle = `hsl(${hue},100%,${lightness}%)`;
            }
            square(x, y, size);
        }
    }
}

function drawLargeSquares(){
    if(Math.random() < 0.1){
        const large = random(50, 150);
        if(Math.random() < 0.3){
            const hue = random(-5, 20),
                  lightness = randomInt(50, 60);
            ctx.fillStyle = `hsl(${hue},100%,${lightness}%)`;
        } else {
            ctx.fillStyle = 'white';            
        }
        square(mouseX, mouseY, large);
    }
}

function randomSquares(){
    for(let i=0; i<amount / 20; i++){
        const x = random(margin, window.innerWidth - margin),
              y = random(margin, window.innerHeight - margin),
              size = randomGaussian(30, 5);
        if(Math.random() > 0.5){
            const hue = random(0, 30),
                  lightness = randomInt(50, 100);
            ctx.fillStyle = `hsl(${hue},100%,${lightness}%)`;
        }else{
            ctx.fillStyle = 'white';
        }
        square(x, y, size);
    }
}

// I'm reducing the probability that a point is drawn
// the farther away from the global margins
// the point's x, y happened to be set
function isOutsideMargin(x, y){
    const e = easeOutQuint,
          r = Math.random,
          w = window.innerWidth,
          h = window.innerHeight,
          m = margin;

    if(x < m){
        if( r() < e( 1-(x/m) ) ){
            return true;
        }
    }
    if(x > w-m){
        if( r() < e( 1-((w-x)/m) ) ){
            return true;
        }
    }
    if(y < m){
        if( r() < e( 1-(y/m) ) ){
            return true;
        }
    }
    if(y > h-m){
        if( r() < e( 1-((h-y)/m) ) ){
            return true;
        }
    }
    return false;
}



function square(x, y, size){
    // subtract half of size so square is centered on x & y
    ctx.fillRect(x - (size / 2), y - (size / 2), size, size);
}



// --------------------- math -----------------------

function euclideanDistance(x1, y1, x2, y2){
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function random(min, max) {
    return (Math.random() * (max - min)) + min;
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomGaussian(mean, sd){
    var y1, x1, x2, w;
    do {
        x1 = (Math.random() * 2) - 1;
        x2 = (Math.random() * 2) - 1;
        w = x1 * x1 + x2 * x2;
    } while (w >= 1);
    w = Math.sqrt(-2 * Math.log(w) / w);
    y1 = x1 * w;
    var m = mean || 0;
    var s = sd || 1;
    return y1 * s + m;
}

// https://gist.github.com/gre/1650294
function easeOutQuint(t){
    return 1+(--t)*t*t*t*t;

    // easeInOutQuint
    // return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
}


