const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let money = parseInt(input[0]);

let fiveCount = parseInt(money / 5);
let answer = -1;

//만약에 5원으로 나눈 몪이
while (fiveCount != -1) {
  let rest = money - fiveCount * 5;
  if (rest % 2 === 0) {
    answer = fiveCount + parseInt(rest / 2);
    break;
  }
  fiveCount--;
}

console.log(answer);
