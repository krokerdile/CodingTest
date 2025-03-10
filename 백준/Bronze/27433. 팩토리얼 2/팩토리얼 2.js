const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);

function print(N) {
  return N * N + 1;
}

let result = 1;

if (N > 0) {
  for (let i = 1; i <= N; i++) {
    result = result * i;
  }
}

console.log(result);
