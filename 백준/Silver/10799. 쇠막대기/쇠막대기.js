const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let list = input[0].split('');

let check = 0;
let answer = 0;
let array = [];

list.forEach((ele, idx) => {
  if (ele == '(') {
    array.push(ele);
  } else {
    array.pop();
    if (list[idx - 1] == '(') {
      answer += array.length;
    } else if (list[idx - 1] == ')') {
      answer++;
    }
  }
});

console.log(answer);
