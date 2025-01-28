const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 태그와 단어를 구분하는 정규표현식
const REGEX = /(<[a-z\s]+>)|([a-z0-9]+)/g;

let str = input[0];
let result = str.replace(REGEX, (match) => {
    // 태그인 경우 그대로 반환
    if (match.startsWith('<')) {
        return match;
    }
    // 단어인 경우 뒤집어서 반환
    return match.split('').reverse().join('');
});

console.log(result);