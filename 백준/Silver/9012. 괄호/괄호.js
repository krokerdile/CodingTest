const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//스택으로 받아서 순서대로 처리해주고 한쌍으로 처리가 되는 지 확인하기

//반복 횟수
let count = parseInt(input[0]);

//스택 체크 해주는 함수
function solution(str) {
  let array = [];
  let list = str.split('');
  let answer = '';
  list.forEach((element) => {
    const len = array.length;
    if (array[len - 1] == '(' && element == ')') {
      array.pop();
    } else if (len == 0 && element == ')') {
      answer = 'NO';
    } else {
      array.push(element);
    }
  });
  if (array.length == 0 && answer != 'NO') {
    return 'YES';
  } else {
    return 'NO';
  }
}

//값 별로 스택 체크 함수 돌리기
for (let i = 1; i <= count; i++) {
  console.log(solution(input[i]));
}
