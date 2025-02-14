const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//계단 아래 시작점 부터 위치한 도착점 까지 가는 게임
let N = parseInt(input[0]);

let list = new Array(N + 1).fill(0);
let dp = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  list[i] = parseInt(input[i]);
}

//각 계단에서 갈 수 있는 거리 1,2니까 같을 때 디피 배열에서 비교하고 더 최대인 경우 저장
//연속해서 3칸은 밟을 수 없음
//연속으로 오른 건 어떻게 판단하지? >

dp[1] = list[1];
dp[2] = list[1] + list[2];
dp[3] = Math.max(list[1] + list[3], list[2] + list[3]);

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 2] + list[i], dp[i - 3] + list[i - 1] + list[i]);
}

console.log(dp[N]);
