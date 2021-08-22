const http = require('http');
const fs = require('fs');
const nodemailer = require('nodemailer');
const qs = require('querystring');

const PORT = process.env.PORT || 5000

const server = http.createServer(async (req, res) => {

    try {
        fs.readFile(__dirname + req.url, (err, data) => {
            if (err) {
                res.writeHead(400);
                res.end(JSON.stringify(err));
    
                return;
            }
    
            if (req.method == "POST") {
                res.writeHead(200);
    
                let body = '';
                let finalBody;
    
                req.on('data', function (data) {
                    body += data;
                    console.log(body);
                
                });
    
                req.on('end', function () {
                    // finalBody = qs.parse(body);

                    console.log(JSON.parse(body));
                    // res.end(`Thank you ${finalBody.name} for reaching out!`);
    
                });
    
    
                // let transporter = nodemailer.createTransport({
                //     host: 'smptp.gmail.com',
                //     port: 465,
                //     secure: true,
                //     auth: {
                //         user: process.env.EMAIL,
                //         pass: process.env.PASSWORD
                //     }
                // });
    
                // let info = await transporter.sendMail({
                //     from: `"MOJEED A. KUSMO" <${process.env.EMAIL}>`
                // })
                
                // console.log(req)
            }
    
            else {
                res.writeHead(200);
                res.end(data);
            }
        });
    
    }
    catch (e) {
        res.writeHead(400);
        res.end(e);
    }
    // res.writeHead(200);
    // res.end('Hi there!');
});

server.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});