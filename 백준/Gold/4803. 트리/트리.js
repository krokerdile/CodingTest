const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let index = 0,
  caseNumber = 1;

while (index < input.length) {
  let [n, m] = input[index].split(' ').map(Number);
  if (n === 0 && m === 0) break; // 종료 조건
  index++;

  // 그래프 저장 (Map 사용)
  const graph = new Map();
  for (let i = 1; i <= n; i++) {
    graph.set(i, new Set());
  }

  for (let i = 0; i < m; i++) {
    let [a, b] = input[index++].split(' ').map(Number);
    graph.get(a).add(b);
    graph.get(b).add(a);
  }

  const visited = new Set();
  let treeCount = 0;

  // BFS 탐색 및 트리 판별
  function isTree(start) {
    const queue = [[start, -1]]; // [현재노드, 부모노드]
    let nodes = 0,
      edges = 0;

    while (queue.length) {
      let [node, parent] = queue.shift();
      if (visited.has(node)) return false; // 사이클 발생

      visited.add(node);
      nodes++;

      for (let neighbor of graph.get(node)) {
        edges++;
        if (neighbor !== parent) {
          queue.push([neighbor, node]);
        }
      }
    }

    // 트리 조건: 정점 개수 - 1 = 간선 개수
    return edges / 2 === nodes - 1;
  }

  // 모든 정점을 돌며 트리 개수 확인
  for (let i = 1; i <= n; i++) {
    if (!visited.has(i)) {
      if (graph.get(i).size === 0) {
        // 간선이 없는 단독 정점도 하나의 트리로 간주
        treeCount++;
        visited.add(i);
      } else if (isTree(i)) {
        treeCount++;
      }
    }
  }

  // 결과 출력
  if (treeCount === 0) {
    console.log(`Case ${caseNumber}: No trees.`);
  } else if (treeCount === 1) {
    console.log(`Case ${caseNumber}: There is one tree.`);
  } else {
    console.log(`Case ${caseNumber}: A forest of ${treeCount} trees.`);
  }
  caseNumber++;
}
