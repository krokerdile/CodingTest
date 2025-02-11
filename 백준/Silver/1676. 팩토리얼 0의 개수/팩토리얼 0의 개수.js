const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);

function Factorial(num) {
  let answer = 0;

  while (num >= 5) {
    answer += parseInt(num / 5);
    num /= 5;
  }

  return answer;
}

console.log(Factorial(N));
