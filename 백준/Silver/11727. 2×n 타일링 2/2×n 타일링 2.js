const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = new Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;  // (세로 2개, 가로 2개, 정사각형 1개)

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[n]);
