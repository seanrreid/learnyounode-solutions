'use strict';

const fs = require('fs');
const file = fs.readFileSync(process.argv[2]);

const fileString = file.toString()
const count = fileString.split('\n');
console.log(count.length - 1);