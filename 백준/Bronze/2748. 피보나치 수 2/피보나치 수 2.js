const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);
let list = [0, 1, 1];

for (let i = 3; i <= N; i++) {
  list[i] = BigInt(list[i - 1]) + BigInt(list[i - 2]);
}

console.log(String(list[N]));
