const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);

let def = input[1].split(' ').map(Number);
let M = parseInt(input[2]);

let list = input[3].split(' ').map(Number);

def = def.sort((a, b) => a - b);

//이분탐색
function binSearch(temp) {
  let start = 0;
  let end = def.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (temp === def[mid]) {
      return mid;
    } else if (temp < def[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

list.forEach((ele) => {
  let result = binSearch(ele);
  if (result != -1) {
    console.log(1);
  } else {
    console.log(0);
  }
});
