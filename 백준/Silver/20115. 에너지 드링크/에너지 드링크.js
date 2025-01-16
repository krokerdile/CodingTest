const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);

let drink = input[1].split(' ').map((i) => parseInt(i));

drink = drink.sort((a, b) => a - b);

let sum = 0;

//가장 적은 양의 에너지 드링크와 가장 많은 양의 에너지 드링크를 더 해줄 때 더 적은 양의 드링크 반절을 버리고 더해주는 것이 가장 효율적임
while (drink.length > 1) {
  let min = drink.shift();
  let max = drink.pop();
  drink.push(max + min / 2);
}

sum += drink[0];
console.log(sum);
