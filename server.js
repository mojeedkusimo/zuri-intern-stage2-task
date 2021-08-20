const http = require('http');
const fs = require('fs');

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