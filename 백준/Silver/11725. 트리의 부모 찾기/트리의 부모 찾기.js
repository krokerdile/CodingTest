const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let tree = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < N; i++) {
  let [parent, child] = input[i].split(' ').map(Number);
  tree[child].push(parent);
  tree[parent].push(child);
}

let parent = Array(N + 1).fill(0);

function solution() {
  let stack = [1];

  let visited = Array(N + 1).fill(false);
  visited[1] = true;

  while (stack.length) {
    let node = stack.pop();

    for (let i = 0; i < tree[node].length; i++) {
      let next = tree[node][i];

      if (visited[next]) continue;

      parent[next] = node;
      visited[next] = true;
      stack.push(next);
    }
  }
}

solution();
console.log(parent.slice(2).join('\n'));
