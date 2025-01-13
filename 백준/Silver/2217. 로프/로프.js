const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//K개의 로프를 병렬로 연결하면 각각의 로프에 걸리는 중량을 나눌 수 있다.
//K개의 로프를 사용하여 중량이 w인 물체를 들어올려야 함.
//각 로프에는 w/K만큼의 중량이 걸리게 됨.

//로프를 이용하여 최대 들어올 릴 수 있는 무게를 구하는 문제

//로프 개수
let count = parseInt(input[0]);

//로프의 중량을 담을 배열
let weight = [];

for (let i = 1; i <= count; i++) {
  weight.push(parseInt(input[i]));
}

weight = weight.sort((a, b) => a - b);

let max = 0;

for (let i = 0; i < count; i++) {
  max = Math.max(max, weight[i] * (count - i));
}

console.log(max);
