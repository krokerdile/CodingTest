const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);

let list = [];

for (let i = 1; i <= N; i++) {
  list.push(input[i]);
}

list.forEach((value) => {
  let answer = -1;
  let isPalindrome = (str) => str === str.split('').reverse().join('');
  if (isPalindrome(value)) {
    answer = 0;
  } else {
    let left = 0;
    let right = value.length - 1;
    while (left < right) {
      if (value[left] !== value[right]) {
        if (
          isPalindrome(value.slice(left + 1, right + 1)) ||
          isPalindrome(value.slice(left, right))
        ) {
          answer = 1;
        } else {
          answer = 2;
        }
        break;
      }
      left++;
      right--;
    }
  }

  console.log(answer);
});
