let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];

for(let i = 1; i <= count; i++) {
    console.log(i);
}