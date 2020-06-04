const ppp = document.querySelectorAll('p'),
      main = document.querySelector('main');

window.addEventListener('scroll', event => {
    let height = main.offsetHeight,
        y = window.scrollY;

    if(y > height * .75){
        displayNoneMenosUno(2);
    } else if(y > height * .5){
        displayNoneMenosUno(1);
    } else if(y > height * .25){
        displayNoneMenosUno(0);
    } else {
        displayNoneMenosUno(null);
    }
});

function displayNoneMenosUno(indice){
    for(let i=0; i<ppp.length; i++){
        if(i === indice){
            ppp[i].style.display = 'block';
        } else {
            ppp[i].style.display = 'none';
        }
    }
}