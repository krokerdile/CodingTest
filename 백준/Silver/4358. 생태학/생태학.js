const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let list = new Map();

input.forEach((ele) => {
  if (list.has(ele)) {
    list.set(ele, list.get(ele) + 1);
  } else {
    list.set(ele, 1);
  }
});

let sortedKeys = Array.from(list.keys()).sort();

const length = input.length;

sortedKeys.forEach((key) => {
  console.log(key, ((list.get(key) / length) * 100).toFixed(4));
});
