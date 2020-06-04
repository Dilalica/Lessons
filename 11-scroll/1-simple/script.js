const p = document.querySelector('p');

window.addEventListener('scroll', event => {
    p.innerHTML = window.scrollY;
});