const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);

//N만큼 배열에 담아주기
let dp = new Array(N).fill(0);

//N만큼 값 담아오기
let list = input[1].split(' ').map((item) => parseInt(item));

//dp[0]은 list[0]으로 초기화
dp[0] = list[0];

//dp[i]는 dp[i-1]과 list[i]를 비교해서 큰 값을 넣어준다.
for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] + list[i], list[i]);
}

//dp배열 중 가장 큰 값을 찾아서 출력
console.log(Math.max(...dp));
