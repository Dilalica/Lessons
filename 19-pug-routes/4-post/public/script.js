console.log('en el cliente');

const form = document.querySelector('form'),
      name = document.getElementById('name'),
      message = document.getElementById('message');

form.addEventListener('submit', event => {
    event.preventDefault();
    postJSON('/add-something', {
        name: name.value,
        message: message.value
    });
    // rest input to nothing
    name.value = '';
    message.value = '';
});