const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

const MAX = 100001;

let arr = new Array(MAX).fill(0);

function bfs() {
  let queue = [];
  queue.push(N);

  while (queue.length != 0) {
    let temp = queue.shift();
    if (temp == M) {
      return arr[temp];
    }
    for (let next of [temp - 1, temp + 1, temp * 2]) {
      if (next < 0 || next >= MAX) continue;
      if (arr[next] == 0) {
        arr[next] = arr[temp] + 1;
        queue.push(next);
      }
    }
  }
}

console.log(bfs());
