const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(Number);

let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  let [start, end] = input[i].split(' ').map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

let result = 0;

let visited = Array.from({ length: N + 1 }, () => 0);

function dfs(start) {
  let stack = [];
  stack.push(start);

  if (visited[start] == 0) {
    result++;
  }
  while (stack.length > 0) {
    let item = stack.pop();
    graph[item].forEach((ele) => {
      if (visited[ele] == 0) {
        visited[ele] = 1;
        stack.push(ele);
      }
    });
  }
}

for (let i = 1; i <= N; i++) {
  dfs(i);
}

console.log(result);
