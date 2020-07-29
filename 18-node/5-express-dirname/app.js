const express = require('express');
const app = express();

// __dirname [string]
// current directory of executed app.js file
console.log(__dirname);

app.get('/', (req, res) => {
    // sendFile() returns the contents of a file
    // given a path name as an argument
    res.sendFile(__dirname + '/archivos/index.html');
});

app.listen(3000);
console.log('listening on port 3000');