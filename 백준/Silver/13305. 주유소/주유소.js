const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//도시 마다 가야 되는 거리가 적혀있고
//도시마다 기름값이 적혀있음
//처음에는 첫 도시에서 기름을 넣어주고 다음 도시로 이동
//다음 도시로 이동할 때 기름값이 더 싸면 그 도시에서 기름을 넣어주고 다음 도시로 이동
//기름값이 더 비싸면 다음 도시로 이동
//도착지로 이동할 때 필요한 최소비용을 구하라

let N = parseInt(input[0]);
let distance = input[1].split(' ').map((i) => BigInt(i));
let cost = input[2].split(' ').map((i) => BigInt(i));

let result = 0n;

let minCost = cost[0];

for (let i = 0; i < N - 1; i++) {
  if (minCost > cost[i]) {
    minCost = cost[i];
  }
  result += minCost * distance[i];
}

console.log(String(result));
