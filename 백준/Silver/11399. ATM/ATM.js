const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//ATM 한대
//사람들이 줄을 서서 기다리고 1번 부터 N 번까지 번호가 매겨져 있음
//
let N = parseInt(input[0]);

let time = input[1].split(' ').map((i) => parseInt(i));

time = time.sort((a, b) => a - b);

let sum = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  sum += time[i];
  result += sum;
}

console.log(result);
