// http://opendata.amb.cat/


let url = 'http://marta-proxy.herokuapp.com/';
    url += 'vehicles_taxi/search';
    url += '?q=Mercedes';
    url += '&getFields=imatge_principal';

getJSON(url, function(data){
    console.log('data', data);
});