const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input.shift());

let list = [];

for (let i = 0; i < N; i++) {
  list.push(input[i].split(' ').map(Number));
}

//N개의 회의에 대해서 회의실 사용표
//한 개의 회의실이 있을 때 최대로 사용할 수 있는 경우
list = list.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let answer = 0;

let end = 0;
list.forEach((time) => {
  if (time[0] >= end) {
    answer++;
    end = time[1];
  }
});

console.log(answer);
