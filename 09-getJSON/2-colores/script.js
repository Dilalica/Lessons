for(let page=1; page<=15; page++){
    const url = 'https://api.harvardartmuseums.org/color?apikey=e1ca50a0-93ce-11ea-ae1d-336217d1fa70&page=' + page;

    getJSON(url, function(data){
        console.log(data);

        const colors = data.records;
        let html = '';

        for(let i=0; i<colors.length; i++){
            html += `
                <p style="color:${colors[i].hex}">
                    ${colors[i].name}
                </p>
            `;
        }

        let el = document.querySelector('div');
        el.innerHTML += html;
    });
}