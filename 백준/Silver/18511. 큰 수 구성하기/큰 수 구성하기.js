const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);
let list = input[1].split(' ').map(Number);
list = list.sort((a, b) => b - a);

let result = [];
let numList = N.toString().split('').map(Number);

// DFS 함수 구현
function dfs(makeNum) {
  // 현재 만든 숫자가 N의 자릿수와 같다면 리턴
  if (makeNum.length === numList.length) {
    return;
  }

  // 가능한 모든 숫자 시도
  for (let i = 0; i < list.length; i++) {
    makeNum.push(list[i]);
    // 현재까지 만든 숫자를 결과 배열에 추가
    result.push(Number(makeNum.join('')));
    // 다음 자릿수 시도
    dfs(makeNum);
    // 백트래킹
    makeNum.pop();
  }
}

// DFS 시작
dfs([]);

// 결과 배열 정렬
result.sort((a, b) => a - b);

// N보다 작거나 같은 수 중 최대값 찾기
let answer = result[0];
for (let num of result) {
  if (num > N) break;
  answer = num;
}

console.log(answer);
