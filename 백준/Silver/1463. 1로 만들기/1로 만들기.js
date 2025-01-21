const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//X가 3으로 나눠 떨어지면 3으로 나눈다.
//X가 2로 나눠 떨어지면 2로 나눈다.
//1을 뺀다.

let X = parseInt(input[0]);
let dp = new Array(X + 1).fill(0);

for (let i = 2; i <= X; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

}

console.log(dp[X]);
