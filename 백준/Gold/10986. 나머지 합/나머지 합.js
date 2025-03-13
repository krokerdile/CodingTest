const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let cnt = Array(M).fill(0); // 나머지 개수 저장 배열
let now = 0;
let result = 0;

for (let i = 0; i < N; i++) {
    now = (now + arr[i]) % M; // 누적 합의 나머지 계산
    if (now < 0) now += M; // 음수 방지
    cnt[now] += 1;
}

result += cnt[0]; // 나머지가 0인 경우 (그 자체로 M의 배수)

for (let i = 0; i < M; i++) {
    if (cnt[i] > 1) {
        result += (cnt[i] * (cnt[i] - 1)) / 2; // 같은 나머지를 가진 쌍의 개수 추가
    }
}

console.log(result);
