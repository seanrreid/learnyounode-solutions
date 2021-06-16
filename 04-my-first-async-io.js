'use strict';

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (error, data) {
    if (error) {
        console.error('ERROR: ', error);
        return error;
    }
    const count = data.split('\n');
    console.log(count.length - 1);
    return data;
});
