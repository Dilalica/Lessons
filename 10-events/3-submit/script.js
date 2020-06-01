let form  = document.querySelector('form');
let input = document.querySelector('input');
let main  = document.querySelector('main');

form.addEventListener('submit', function(event){
    // to avoid the page refreshing
    event.preventDefault();
    // grab whatever user typed in input[type=text] field
    const city = input.value;

    // build a url with city
    let weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?';
        weatherUrl += 'q=' + city;
        weatherUrl += '&APPID=f4733ffb6395ff65066ef6800f002dc2';

    // now make an AJAX request
    getJSON(weatherUrl, function(data){
        console.log('openweathermap', data);
        const description = data.weather[0].description;
        main.innerHTML = `
            <p>
                ${city}: ${description}
            </p>
            ${main.innerHTML}
        `;
        // // above is equivalent to below
        // main.innerHTML = '<p>' + city + ': ' + description + '</p>' + main.innerHTML;
    });

    // remove text user placed
    input.value = '';
});


function getJSON(url, callback){
    var request = new XMLHttpRequest();
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            callback(JSON.parse(this.response), this);
        } else {
            console.error('getJson request failed', this);
        }
    };
    request.onerror = function() {
        console.error('connection error', this);
    };
    request.open('GET', url);
    request.send();
}
