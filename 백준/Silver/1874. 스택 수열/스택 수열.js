const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let count = parseInt(input[0]);
let array = [];

// let array = Array.from({ length: count }, (_, i) => i + 1);
let answer = [];
let point = 0;

for (let i = 1; i <= count; i++) {
  let num = parseInt(input[i]);

  while (1) {
    if (array[array.length - 1] == num) {
      array.pop();
      answer.push('-');

      break;
    }
    point++;
    array.push(point);
    answer.push('+');

    if (point > count) {
      point = -1;
      break;
    }
  }
}
if (array.length == 0) {
  answer.forEach((ele) => console.log(ele));
} else {
  console.log('NO');
}
