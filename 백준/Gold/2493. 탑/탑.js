const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let count = parseInt(input[0]);
let array = [];
let answer = [];
let list = input[1].split(' ').map(Number);

for (let i = 0; i < count; i++) {
  if (array.length == 0) {
    answer.push(0);
    array.push([list[i], i + 1]);
    continue;
  }
  if (array[array.length - 1][0] < list[i]) {
    while (array.length) {
      if (array[array.length - 1][0] > list[i]) {
        break;
      } else {
        array.pop();
      }
    }
    answer.push(!array.length ? 0 : array[array.length - 1][1]);
    array.push([list[i], i + 1]);
  } else {
    answer.push(!array.length ? 0 : array[array.length - 1][1]);
    array.push([list[i], i + 1]);
  }
}

console.log(answer.join(' '));
