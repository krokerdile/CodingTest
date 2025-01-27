const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 입력 처리
let [N, M] = input[0].split(' ').map(Number);
let graph = Array.from({ length: N }, () => []);

// 그래프 구성
for (let i = 1; i < M + 1; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// DFS 함수 정의
function dfs(current, depth, visited) {
  if (depth === 5) {
    return true;
  }

  for (let next of graph[current]) {
    if (!visited[next]) {
      visited[next] = true;
      if (dfs(next, depth + 1, visited)) return true;
      visited[next] = false;
    }
  }
  return false;
}

// 각 정점에서 시작하여 깊이가 5인 경로가 있는지 확인
let answer = 0;
for (let i = 0; i < N; i++) {
  let visited = Array(N).fill(false);
  visited[i] = true;
  if (dfs(i, 1, visited)) {
    answer = 1;
    break;
  }
}

console.log(answer);
