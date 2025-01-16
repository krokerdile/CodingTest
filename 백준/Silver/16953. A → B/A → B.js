const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let count = 1;

while (1) {
  if (N === M) {
    break;
  } else if (N > M) {
    count = -1;
    break;
  }
  if (M % 2 == 0) {
    M /= 2;
    count++;
  } else if (M % 2 == 1 && M % 10 == 1) {
    M = parseInt(M.toString().slice(0, -1));
    count++;
  } else if (M % 10 !== 1) {
    count = -1;
    break;
  }
}

console.log(count);
