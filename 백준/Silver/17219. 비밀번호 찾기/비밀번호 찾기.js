const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//N 10만개
//M 10만개
//시간 복잡도 O(10만개 * 10만개) = 1조

let [N, M] = input[0].split(' ').map((i) => parseInt(i));

let list = new Map();

for (let i = 1; i <= N; i++) {
  let [site, password] = input[i].split(' ');
  list.set(site, password);
}

let result = [];

for (let i = N + 1; i < input.length; i++) {
  result.push(list.get(input[i]));
}

console.log(result.join('\n'));
