const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M, V] = input[0].split(' ').map(Number);

let graph = Array.from({ length: N }, () => []);

for (let i = 1; i < M + 1; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph[a - 1].push(b - 1);
  graph[b - 1].push(a - 1);
}

//그래프 정렬
for (let i = 0; i < N; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = new Array(N).fill(false);
let dfsLog = [];

function dfs(node) {
  dfsLog.push(node + 1);
  visited[node] = true;

  for (let nextNode of graph[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode);
    }
  }
}

dfs(V - 1);

console.log(dfsLog.join(' '));

visited.fill(false);

let bfsLog = [];

function bfs(node) {
  let queue = [node];
  visited[node] = true;

  while (queue.length > 0) {
    let curNode = queue.shift();
    bfsLog.push(curNode + 1);

    for (let nextNode of graph[curNode]) {
      if (!visited[nextNode]) {
        queue.push(nextNode);
        visited[nextNode] = true;
      }
    }
  }
}

bfs(V - 1);

console.log(bfsLog.join(' '));
