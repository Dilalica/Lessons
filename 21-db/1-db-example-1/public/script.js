const form = document.querySelector('form');
const name = document.getElementById('name');
const message = document.getElementById('message');
form.addEventListener('submit', event => {
    event.preventDefault();
    let url = '/add?';
    url += 'message=' + message.value;
    url += '&';
    url += 'name=' + name.value;
    // '/message?say=djkslfjdaskl'
    getJSON(url, data => {
        console.log(data);
    });
    name.value = '';
    message.value = '';
});
