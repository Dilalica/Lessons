// change value of city to see other results
let city = 'Paris';


// this changes the <title> content in <head>
document.title = city;

// get the only <h1> element on page
let h1 = document.querySelector('h1');
// now add city name as text content in that h1
h1.innerHTML = city;


// build a url where the city can change
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=f4733ffb6395ff65066ef6800f002dc2';

// make a call to the open weather API
getJSON(weatherUrl, function(data){
    // getJSON() places the returned JSON
    // in the callback's first parameter
    console.log('openweathermap', data);

    // access the weatherEl through an ID
    // we could have just used query selector on the only h2 element
    // but I wanted to break the monotony
    let weatherEl = document.getElementById('weather');

    // take a look at the returned data object
    // to see why I'm accessing the weather description
    // the way I currently am
    const description = data.weather[0].description;

    // now add content to weatherEl
    weatherEl.innerHTML = description;
});




// each API is going to be a little different
// wikipedia's doesn't use URL parameters like ? and &
const wikipediaUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + city;
getJSON(wikipediaUrl, function(data){
    console.log('wikipedia', data);

    // get <figure class="picture"> element
    // querySelector() will return first element on page
    // to match the CSS style selector
    // because there's only one <figure> element
    // we could have selected the element name itself
    let figure = document.querySelector('.picture');

    // grab a url to an image
    const src = data.thumbnail.source;

    // innerHTML can parse and load full HTML
    // remember to keep track of which quotes " '
    // belong to JS string and which belong to HTML output
    figure.innerHTML = '<img src="' + src + '">';
});



// NY Times API
const nytimesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&api-key=H1YLGdft6YZwC9ehHEbgFf2t2FRjMQxF';
getJSON(nytimesUrl, function(data){
    console.log('nytimes', data);

    // get unordered list <ul> html element
    let ul = document.querySelector('ul');


    // I want to access
    // data.response.docs[0].headline.main
    // for each of the items in the docs array
    const docs = data.response.docs;
    for(let i=0; i<docs.length; i++){

        // grab headline and url to NYTimes article
        const headline = docs[i].headline.main;
        const url = docs[i].web_url;

        // using the backtick ` with ${} syntax
        // replaces the + concatenation operator
        // allows us to write more readable HTML
        // as normal, browser will ignore white space
        ul.innerHTML += `
            <li>
                <a href="${url}">${headline}</a>
            </li>
        `;
    }
});
