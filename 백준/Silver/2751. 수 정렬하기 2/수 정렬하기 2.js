const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);

let list = [];

for (let i = 1; i <= N; i++) {
  list.push(parseInt(input[i]));
}

list.sort((a, b) => a - b);

let result = list.join('\n');

console.log(result);
