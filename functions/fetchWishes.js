const https = require('https');

exports.handler = function(event, context, callback) {
    var token = process.env.netlify_access_token;


    var options = {
        hostname: 'api.netlify.com',
        port: 443,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var queryToken = `access_token=${token}`;
    var opts1 = Object.assign({}, options, { path: `/api/v1/forms/birthday/submissions?${queryToken}`});

    var req = https.request(opts1, function(res) {

        res.setEncoding('utf8');
        var body = "";

        res.on('data', data => {
            body += data;
            console.log(data)
            callback(null, {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    'Content-Type': 'application/json'
                },
                body: data
            })
        });

        res.on('end', function () {
            callback(null, {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    'Content-Type': 'application/json'
                },
                body: body
            })
        });
    });

    req.end();
}