const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//testcase
let T = parseInt(input.shift());

let list = input.map(Number);

let arr = [1, 1, 1, 2, 2];

let max = Math.max(...list);

if (max > 5) {
  for (let i = 4; i < max; i++) {
    arr.push(arr[i - 4] + arr[i]);
  }
}

list.forEach((ele) => {
  console.log(arr[ele - 1]);
});
