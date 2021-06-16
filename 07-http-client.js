'use strict'

const http = require('http');

// If we want to use the 'options' object we need to breakdown the URL
// Otherwise we can just pass the URL as process.argv[2]

const url = new URL(process.argv[2]);
const options = {
    hostname: url.hostname,
    port: url.port
}

http.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        console.log(data);
    });
    response.on('error', function (error) {
        console.error("ERROR: ", error)
    })
});