const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(' ').map(Number);

let a = num[0];
let b = num[1];

if (a > b) {
  console.log('>');
} else if (a === b) {
  console.log('==');
} else {
  console.log('<');
}
