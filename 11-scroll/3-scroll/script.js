const sections = document.querySelectorAll('section'),
      circle = document.querySelector('.circle'),
      square = document.querySelectorAll('.square');

// declaring global variables
let diameter = getDiameter(),
    // just a shorter way to write
    // frequently accessed objects
    sS = square.style,
    cS = circle.style,
    y = window.scrollY,
    windowHeight = window.innerHeight,
    height = sections[0].offsetHeight,
    top1 = sections[1].offsetTop,
    top2 = sections[2].offsetTop;
    // don't need top0 = 0,

window.addEventListener('scroll', event => {
    // we can expect window.scrollY to change
    // each time a scroll event is fired
    y = window.scrollY;

    if(y < top1){
        sS.display = 'none';
        const ratio = y / height;
        cS.width = (diameter * ratio) + 'px';
        cS.height = (diameter * ratio) + 'px';
    } else if(y < top2 - windowHeight) {
        sS.display = 'block';
    } else {
        sS.display = 'none';
        const ratio = 1 - ((y - top2 + windowHeight) / (height));
        cS.width = (diameter * ratio) + 'px';
        cS.height = (diameter * ratio) + 'px';
    }
});


// this is a different way to attach an event listener
// we could have used the more traditional 
// window.addEventListener('resize')
window.onresize = event => {
    windowHeight = window.innerHeight;
    // first will do, they're all the same height
    height = sections[0].offsetHeight;
    top1 = sections[1].offsetTop;
    top2 = sections[2].offsetTop;
};


// function that returns the either
// the window's height or width
// depending on which one is bigger
function getDiameter() {
    if(window.innerHeight < window.innerWidth)
        return window.innerHeight;
    else
        return window.innerWidth;
}
