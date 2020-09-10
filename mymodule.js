"use strict";

const fs = require("fs");
const path = require("path");

const fileListModule = (directory, extension, callback) => {
    extension = "." + extension;
    fs.readdir(directory, function (err, list) {
        if (err) {
            return callback(err);
        }
        const filteredList = list.filter(file => {
            if (path.extname(file) === extension) {
                return file;
            }
        });
        return callback(null, filteredList)
    });
}

module.exports = fileListModule;