const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(' ').map(Number);

let answer = 0;

num.forEach((x) => {
  answer += x * x;
});

console.log(answer % 10);
