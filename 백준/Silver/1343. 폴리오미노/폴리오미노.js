const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input[0];

let count = str.split('.');

if (count.some((ele) => ele.length % 2 !== 0)) {
  console.log(-1);
} else {
  count.forEach((c, idx) => {
    if (c.length >= 4) {
      count[idx] =
        new Array(parseInt(c.length / 4)).fill('AAAA').join('') +
        new Array(c.length % 4 > 0 ? 1 : 0).fill('BB').join('');
    } else {
      count[idx] = new Array(parseInt(c.length / 2)).fill('BB').toString();
    }
  });

  console.log(count.join('.'));
}
