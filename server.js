const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

let mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"};

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {

    fs.readFile(__dirname + req.url, (err, data) => {
        if (err) {
            res.writeHead(400);
            res.end(JSON.stringify(err));

            return;
        }

        res.writeHead(200);
        res.end(data);
    });

    // res.writeHead(200);
    // res.end('Hi there!');
});

server.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});