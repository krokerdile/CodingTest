const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let CheckSet = new Set();

for (let i = 1; i <= N; i++) {
  CheckSet.add(input[i]);
}

let answer = 0;

for (let i = N + 1; i <= N + M; i++) {
  if (CheckSet.has(input[i])) {
    answer += 1;
  }
}

console.log(answer);
