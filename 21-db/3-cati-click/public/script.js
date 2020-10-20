console.log('Client-side code running');

const main = document.querySelector('main');

getJSON('/clicks', clicks => {
    console.log(clicks);
    clicks.forEach(click => {
        addDot(click.x,click.y);
    });
});


document.body.addEventListener('click', function(e){
    console.log('click event', e);

    addDot(e.clientX, e.clientY)

    postJSON('/clicked', {
        x: e.clientX,
        y: e.clientY
    }, data => {
        console.log(data);
    });
});


function addDot(x, y){
    main.innerHTML += `
        <div style="
            top:${y}px;
            left:${x}px;
        "></div>
    `;
}


















// ------------------------------------------------------ ajax


// callback is optional
function postJSON(_url, _data, _callback){
    var _request = new XMLHttpRequest();
    _request.open('POST', _url);
    _request.setRequestHeader('Content-Type', 'application/json');
    _request.onload = function() {
        if (_request.status >= 200 && this.status < 400) {
            var response = JSON.parse(_request.responseText);
            if(_callback)
                _callback(response);
            else
                console.log(response);
        } else {
            console.error('getJSON request failed', this);
        }
    };
    _request.onerror = function() {
        console.error('connection error', this);
    };
    _request.send(JSON.stringify(_data));
}



// I added an underscore to variable names
// to reduce likelihood they'd conflict with
// other variable names in the global scope
function getJSON(_url, _callback){
    var _request = new XMLHttpRequest();
    _request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            _callback(JSON.parse(this.response), this);
        } else {
            console.error('getJSON request failed', this);
        }
    };
    _request.onerror = function() {
        console.error('connection error', this);
    };
    _request.open('GET', _url);
    _request.send();
}
