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