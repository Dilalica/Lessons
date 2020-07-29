const http = require('http');

const html = `
    <html>
        <head>
            <title>Hola Mundo</title>
        </head>
        <body>
            <h1>
                Como estamos?
            </h1>
        </body>
    </html>
`;

const server = http.createServer((req, res) => {
    res.write(html);
    res.end();
});

server.listen(3000);
console.log('server listening on port 3000...');