const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//소문자로 이루어진 문자열 W가 주어진다.
//양의 정수 K가 중어진다.
//어떤 문자를 정확히 k를 포함하는 가장 짧은 연속 문자열의 길이를 구한다.
//어떤 문자를 정확히 K개를 포함하고 문자열의 첫번재와 마지막 글자가 해당 문자로 같은 긴 연속 문자열의 길이를 구한다.

//돌면서 알파벳 별로 자리를 저장한다.

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let shortest = 100000;
  let longest = 0;
  let str = input[2 * i - 1].split('');
  let K = parseInt(input[2 * i]);
  let array = Array.from({ length: 26 }, () => []);

  for (let j = 0; j < str.length; j++) {
    array[str[j].charCodeAt() - 97].push(j);
  }

  for (let i = 0; i < 26; i++) {
    if (array[i].length === 0) {
      continue;
    }

    //K개를 포함하는 가장 짧은 연속 문자열의 길이
    //각 알파벳 배열에서 K개 만큼 개수가 있는지 확인하고
    //K가 있으면 가장 짧은 길이와 가장 긴 길이를 구한다.
    if (array[i].length >= K) {
      for (let j = 0; j <= array[i].length - K; j++) {
        let length = array[i][j + K - 1] - array[i][j] + 1;
        shortest = Math.min(shortest, length);
        longest = Math.max(longest, length);
      }
    } else {
      continue;
    }
  }
  if (shortest === 100000) {
    console.log(-1);
  } else {
    console.log(shortest, longest);
  }
}
