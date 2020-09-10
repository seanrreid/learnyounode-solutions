'use strict'
const fileListModule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

fileListModule(directory, extension, (err, files) => {
    files.map(file => {
        console.log(file);
    });
});