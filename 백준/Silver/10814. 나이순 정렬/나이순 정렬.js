const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);

let list = [];

for (let i = 1; i <= N; i++) {
  let temp = input[i].split(' ');
  list.push([...temp, i]);
}

//나이순 으로 비교후 가입한 순으로 정렬
list.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[2] - b[2];
  } else {
    return a[0] - b[0];
  }
});

list.forEach((element) => {
  console.log(element[0] + ' ' + element[1]);
});
