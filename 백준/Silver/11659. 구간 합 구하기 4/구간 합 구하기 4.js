const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(Number);
let list = input.shift().split(' ').map(Number);

// 누적합 배열 생성
let prefixSum = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + list[i - 1];
}

let answer = [];
input.forEach(line => {
    let [start, end] = line.split(' ').map(Number);
    answer.push(prefixSum[end] - prefixSum[start - 1]);
});

console.log(answer.join('\n'));
