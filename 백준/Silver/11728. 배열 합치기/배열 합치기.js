const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//정렬 되어 있는 A,B
//두 배열을 합친 다음에 정렬해서 출력하는 프로그램을 작성하시오
let [N, M] = input[0].split(' ').map(Number);

let A = input[1].split(' ').map(Number);
let B = input[2].split(' ').map(Number);

let result = [];

result = A.concat(B).sort((a, b) => a - b);

console.log(result.join(' '));
