const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//동전을 N개 종류를 가지고 있음. >> 각 동전마다 많이 가지고 있음
//동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 함.

let [N, K] = input[0].split(' ').map((i) => parseInt(i));

let coin = [];

for (let i = 1; i <= N; i++) {
  coin.push(parseInt(input[i]));
}

coin = coin.sort((a, b) => b - a);

let count = 0;

for (let i = 0; i < N; i++) {
  count += parseInt(K / coin[i]);
  K %= coin[i];
}

console.log(count);
