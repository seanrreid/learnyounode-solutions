'use strict'

const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const fileExtension =  "." + process.argv[3];

fs.readdir(directory, function (err, list) {
    if (err !== null) {
        console.error(err);
    }
    list.map((file) => {

        if (path.extname(file) === fileExtension) {
            console.log(file);
        }
    })
})