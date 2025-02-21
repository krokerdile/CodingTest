const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(Number);
let trees = input[0].split(' ').map(Number);

// 이진 탐색 범위 설정
let start = 0;
let end = Math.max(...trees);
let result = 0;

// 잘린 나무 길이 계산 함수
function getCutWood(height) {
  return trees.reduce((sum, tree) => sum + Math.max(0, tree - height), 0);
}

// 이진 탐색 실행
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let cutLength = getCutWood(mid);

  if (cutLength >= M) {
    // 충분히 나무를 가져갈 수 있다면, 높이를 더 높이 설정
    result = mid; // 최적의 높이 기록
    start = mid + 1;
  } else {
    // 부족하면 높이를 낮춤
    end = mid - 1;
  }
}

console.log(result);
