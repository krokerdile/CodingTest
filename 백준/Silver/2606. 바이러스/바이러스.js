const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//graph 만들어주기

//컴퓨터의 수
let N = parseInt(input[0]);

//연결 되어 있는 컴퓨터 쌍의 수
let M = parseInt(input[1]);

//연결 되어 있는 컴퓨터 쌍의 정보
let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 2; i < M + 2; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

//1번 컴퓨터가 바이러스에 걸렸을 때 1번 컴퓨터를 통해
//연결되어져 있는 컴퓨터수의 개수를 구하는 문제

const visited = new Array(N + 1).fill(false);

function dfs(node) {
  visited[node] = true;

  for (let nextNode of graph[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode);
    }
  }
}

dfs(1);

//바이러스에 걸리게 되는 컴퓨터의 수
let result = 0;

for (let i = 2; i < visited.length; i++) {
  if (visited[i]) {
    result += 1;
  }
}

console.log(result);
