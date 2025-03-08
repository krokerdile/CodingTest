const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]); // NxN 배열 크기
let k = parseInt(input[1]); // k번째로 작은 수

// 특정 값 x보다 작은 값의 개수를 구하는 함수
function countLessThanX(x) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    count += Math.min(N, Math.floor(x / i));
  }
  return count;
}

// K번째 작은 수를 찾는 이분 탐색 함수
function findKthNumber(k) {
  let left = 1;
  let right = k;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (countLessThanX(mid) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(findKthNumber(k));
