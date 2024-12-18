const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = parseInt(input[0]);

let array = [];
let count = 0;
let answer = [];

for (let i = 1; i < num + 1; i++) {
  let [order, number] = input[i].split(' ');
  switch (order) {
    case 'push':
      array.push(number);
      count++;
      break;
    case 'pop':
      if (array.length == 0) {
        answer.push(-1);
      } else {
        answer.push(array[count - 1]);
        array = array.slice(0, count - 1);
        count--;
      }
      break;
    case 'size':
      answer.push(count);
      break;
    case 'empty':
      if (count == 0) {
        answer.push(1);
      } else {
        answer.push(0);
      }
      break;

    case 'top':
      if (array.length == 0) {
        answer.push(-1);
      } else {
        answer.push(array[count - 1]);
      }
      break;
  }
}

console.log(answer.join('\n'));
