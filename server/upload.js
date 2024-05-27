const fs = require('fs');
const https = require('https');

function upload() {
    const filePath = '../client/public/2.jpg';
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const options = {
            hostname: 'api.imgur.com',
            path: '/3/image/',
            method: 'POST',
            headers: {
                'Authorization': 'Client-ID 33c38cac5f79bd0',
                'Content-Type': 'application/octet-stream',
                'Content-Length': data.length
            }
        };

        const req = https.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                try {
                    const json = JSON.parse(responseData);
                    console.log(json);
                } catch (error) {
                    console.error('Error parsing response:', error);
                }
            });
        });

        req.on('error', (e) => {
            console.error('Error with request:', e);
        });

        req.write(data);
        req.end();
    });
}

upload();
