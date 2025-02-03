const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//첫줄에 물품의 수 N과 준서가 버틸수 있는 무게 K가 주어짐
let [N, K] = input[0].split(' ').map(Number);
//두번째 줄 부터 N개의 줄 만큼 각 물건의 무게와 해당 물건의 가치가 주어짐
let weights = [];
let values = [];
for (let i = 1; i < N + 1; i++) {
  let [W, V] = input[i].split(' ').map(Number);
  weights.push(W);
  values.push(V);
}

const dp = Array(N + 1)
  .fill()
  .map(() => Array(K + 1).fill(0));

// 3. Bottom-Up 방식으로 dp 테이블 채우기
function solveKnapsack() {
  // 각 물건에 대해
  for (let i = 1; i <= N; i++) {
    // 가능한 모든 무게에 대해
    for (let w = 0; w <= K; w++) {
      // 현재 물건의 실제 인덱스 (배열은 0부터 시작하므로)
      const itemIndex = i - 1;

      if (weights[itemIndex] <= w) {
        // 현재 물건을 넣을 수 있는 경우
        // 1) 현재 물건을 넣는 경우
        // 2) 현재 물건을 넣지 않는 경우
        // 두 가지 중 더 큰 값을 선택
        dp[i][w] = Math.max(
          values[itemIndex] + dp[i - 1][w - weights[itemIndex]], // 넣는 경우
          dp[i - 1][w], // 넣지 않는 경우
        );
      } else {
        // 현재 물건을 넣을 수 없는 경우
        // 이전 상태의 값을 그대로 가져옴
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // 최종 결과 반환
  return dp[N][K];
}

// 4. 결과 출력
const result = solveKnapsack();
console.log(result); // 14가 출력됩니다

// // DP 테이블의 변화 과정을 보여주는 함수
// function printDPTable() {
//   console.log('\nDP 테이블 상태:');
//   for (let i = 0; i <= N; i++) {
//     console.log(`물건 ${i}개 고려:`, dp[i]);
//   }
// }

// printDPTable();
