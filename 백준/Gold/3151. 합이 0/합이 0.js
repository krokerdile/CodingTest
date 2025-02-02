const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// 카운터 배열 생성 (자바스크립트에서는 빈 배열 생성 후 필요할 때 값 할당)
const counter = new Array(40001).fill(0);

let ans = 0;
for (let i = 0; i < N; i++) {
    // 현재까지 만들어진 두 수의 합과 현재 숫자가 0이 되는 경우를 찾음
    ans += counter[20000 - nums[i]];
    
    // 현재 숫자와 이전 숫자들의 합을 카운터에 기록
    for (let j = 0; j < i; j++) {
        counter[20000 + nums[i] + nums[j]]++;
    }
}

console.log(ans);