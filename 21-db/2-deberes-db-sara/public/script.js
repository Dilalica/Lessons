console.log('en el cliente');

const form = document.querySelector('form'),
      color = document.getElementById('color'),
      num = document.getElementById('num');

form.addEventListener('submit', event => {
    event.preventDefault();

    const obj = {
        color: color.value,
        num: num.value
    };

    postJSON('/add', obj, data => {
        console.log(data);
    });

    // resetear
    color.value = '';
    num.value = '';
});
