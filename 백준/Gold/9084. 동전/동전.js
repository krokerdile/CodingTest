const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = Number(input[0]);

//첫번쨰 줄에 동전 N 가지수
//두번째 줄에 각 금액 오름차순
for (let i = 1; i <= T; i++) {
  let N = Number(input[3 * (i - 1) + 1]);
  let coin = input[3 * (i - 1) + 1 + 1].split(' ').map(Number);
  let M = Number(input[3 * (i - 1) + 1 + 2]);
  let result = solution(N, coin, M);
  console.log(result);
}

function solution(N, coin, M) {
  let dp = Array(M + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = coin[i]; j <= M; j++) {
      dp[j] += dp[j - coin[i]];
    }
  }

  return dp[M];
}
