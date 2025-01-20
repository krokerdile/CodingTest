const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);

//값을 N번 만큼 받아오기
let list = [];
for (let i = 1; i <= N; i++) {
  list.push(input[i].split(' ').map((item) => parseInt(item)));
}

//다리 건너기 해주는 함수를 만들자
function solution(cases) {
  // dp 배열 초기화 (30 x 30 크기로, 문제 제한이 N,M < 30)
  const dp = Array.from({ length: 30 }, () => Array(30).fill(0));

  // 기본값 설정
  // 1개씩 선택하는 경우는 전체 개수와 같음
  for (let i = 0; i < 30; i++) {
    dp[i][1] = i;
    dp[i][0] = 1; // 0개 선택하는 경우는 1가지
    dp[i][i] = 1; // 모두 선택하는 경우는 1가지
  }

  // dp 계산
  // dp[i][j] = i개 중에서 j개를 선택하는 경우의 수
  for (let i = 2; i < 30; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  // 각 테스트 케이스에 대해 결과 계산
  return cases.map(([west, east]) => dp[east][west]);
}

console.log(solution(list).join('\n'));
