const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);
const MOD = 1000000000;

let dp = Array(N + 1)
  .fill()
  .map(() => Array(K + 1).fill(0));

// 초기값 설정: 1개로 만드는 경우는 1가지
for (let i = 0; i <= N; i++) {
  dp[i][1] = 1;
}

// Bottom-up으로 채우기
for (let k = 2; k <= K; k++) {
  for (let n = 0; n <= N; n++) {
    for (let i = 0; i <= n; i++) {
      dp[n][k] = (dp[n][k] + dp[n - i][k - 1]) % MOD;
    }
  }
}

console.log(dp[N][K]);
