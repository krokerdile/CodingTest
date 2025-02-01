const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, X] = input[0].split(' ').map(Number);
let list = input[1].split(' ').map(Number);

let maxSum = 0;
let currentSum = 0;
let count = 0;

// 처음 X일 동안의 방문자 수 합을 구한다.
for (let i = 0; i < X; i++) {
  currentSum += list[i];
}
maxSum = currentSum;
count = 1;

// 슬라이딩 윈도우를 사용하여 나머지 기간의 방문자 수 합을 구한다.
for (let i = X; i < N; i++) {
  currentSum += list[i] - list[i - X];
  if (currentSum > maxSum) {
    maxSum = currentSum;
    count = 1;
  } else if (currentSum === maxSum) {
    count++;
  }
}

// 최대 방문자 수가 0명이라면 SAD를 출력
if (maxSum === 0) {
  console.log('SAD');
} else {
  console.log(maxSum + '\n' + count);
}
