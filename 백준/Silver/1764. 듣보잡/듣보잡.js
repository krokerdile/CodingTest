const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map((i) => parseInt(i));

//듣도 못한 사람
let list = new Set();

//보도 못한 사람
let result = [];

for (let i = 1; i <= N; i++) {
  list.add(input[i]);
}

for (let i = N + 1; i < input.length; i++) {
  if (list.has(input[i])) {
    result.push(input[i]);
  }
}

console.log(result.length);
console.log(result.sort().join('\n'));
