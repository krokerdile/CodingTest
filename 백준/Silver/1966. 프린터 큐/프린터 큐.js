const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const count = parseInt(input[0]);
let result = [];

for (let i = 0; i < count; i++) {
  let [num, point] = input[i * 2 + 1].split(' ');
  let answer = [];
  let list = input[(i + 1) * 2].split(' ').map((x, idx) => [x, idx]);
  while (list.length != 0) {
    let shift = list.shift();
    if (list.some((x) => x[0] > shift)) {
      list.push(shift);
    } else {
      answer.push(shift[1]);
    }
  }
  answer.forEach((ele, idx) => {
    if (ele == point) {
      console.log(idx + 1);
    }
  });
}