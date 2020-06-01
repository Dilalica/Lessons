// attach event listener to window object
// any time user clicks anywhere the callback will invoke
window.addEventListener('click', function(event){
    // event.clientX number of pixels from left edge of window
    const x = event.clientX;
    // event.clientY number of pixels down from the top
    const y = event.clientY;
    // Math.random() returns a random decimal valu between 0 to 1
    const hue = Math.random() * 360;
    // just add to <body>
    document.body.innerHTML += `
        <div style="
            top:${y}px;
            left:${x}px;
            background-color:hsl(${hue},100%,50%);
        "></div>
    `;
});