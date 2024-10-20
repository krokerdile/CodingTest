const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(' ').map(Number);
let list = input[1].split(' ').map(Number);

list.forEach((x) => {
  if (x < num[1]) {
    console.log(x);
  }
});
