'use strict';

const fs = require('fs');

// The filename is DYNAMIC
// LearnYouNode will provide the name when the test is run
// So we just listen for the process arguments...
const file = fs.readFileSync(process.argv[2]);

// Convert the file into a readable string
const fileString = file.toString()

// Split the string on the new line character '\n'
const count = fileString.split('\n');

// Return the length of the count value,
// REMEMBER, index starts at 0, so we need to subtract 1!
console.log(count.length - 1);