'use strict'

// start with zero...
let answer = 0

// We don't know how many numbers are passed as arguments
// so, we need to keep going until we find the end

// We also need to start at the SECOND index
for (let i = 2; i < process.argv.length; i++) {
    // Keep adding numbers together...
    answer += Number(process.argv[i])
}

console.log(answer);