// 'https://en.wikipedia.org/api/rest_v1/page/summary/'

let url = 'https://en.wikipedia.org/w/api.php?';
    url += 'action=query';
    url += '&imlimit=50';
    url += '&format=json';
    url += '&prop=images';
    url += '&titles=List%20of%20female%20spacefarers';
    url += '&origin=*';

getJSON(url, function(data){
    console.log(data);
    const fotos = data.query.pages[15039565].images;
    let html = '';
    let otherSearch = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    for (let i=0; i<fotos.length;i++){
        let title = fotos[i].title;
        title = title.replace(/ /gi,'_');
        title = encodeURI(title);
        getJSON(otherSearch + title,function(data){
            let src = data.thumbnail.source;
            console.log(src);
        });
    }
});