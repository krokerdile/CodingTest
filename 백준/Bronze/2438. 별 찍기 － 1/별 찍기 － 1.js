const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let count = input[0];

let answer = ['*'];

for (let i = 1; i < count; i++) {
  answer.push(answer[i - 1] + '*');
}

answer.forEach((a) => {
  console.log(a);
});
