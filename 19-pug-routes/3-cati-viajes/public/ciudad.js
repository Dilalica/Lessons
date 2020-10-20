console.log('ciudad.js');

const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', event => {
    event.preventDefault();

    // redirectionar el navegador a la dirección
    //   /madrid/avion
    const ciudad = window.location.pathname;
    const path =  ciudad + '/' + input.value;
    window.location.href = path;
});
