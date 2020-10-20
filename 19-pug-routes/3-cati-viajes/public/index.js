console.log('index.js');

const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', event => {
    event.preventDefault();
    window.location.href = '/' + input.value;
    // redirectionar el navegador a la dirección
    //   /:ciudad
});
