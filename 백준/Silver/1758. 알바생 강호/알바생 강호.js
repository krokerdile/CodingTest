const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//8시에 입구에서 커피를 받고 들어갈 수 있음
//강호는 입구에서 커리를 하나씩 나눠줌
//손님들은 입구에 들어갈 때 강호에게 팁을 줌
//손님이 몇 번째 커피를 받냐에 따라서 팁을 다른 액수로 강호에게 줌
//손님은 강호에게 원래 주려고 했는 돈 - (받은 등수 - 1) 만큼 팁을 준다.

let count = parseInt(input[0]);

let tip = [];

for (let i = 1; i <= count; i++) {
  tip.push(parseInt(input[i]));
}

tip = tip.sort((a, b) => b - a);

let max = 0;

for (let i = 0; i < count; i++) {
  max += Math.max(0, tip[i] - i);
}

console.log(max);
