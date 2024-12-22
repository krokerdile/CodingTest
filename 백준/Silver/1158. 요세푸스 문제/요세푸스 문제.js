const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [count, point] = input[0].split(' ');

let array = Array.from({ length: count }, (_, i) => i + 1);

let pop = 0;
let answer = [];

for (let i = 0; i < count; i++) {
  pop += parseInt(point) - 1;
  if (pop >= array.length) {
    pop = pop % array.length;
  }
  answer.push(array[pop]);
  array = array.filter((_, idx) => idx != pop);
}

console.log('<' + answer.join(', ') + '>');
