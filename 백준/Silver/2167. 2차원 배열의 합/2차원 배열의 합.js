const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const matrix = input.slice(1, N + 1).map(line => line.split(' ').map(Number));
const K = Number(input[N + 1]);
const queries = input.slice(N + 2).map(line => line.split(' ').map(Number));

// 누적 합 배열 생성
const prefixSum = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

// 누적 합 계산
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
        prefixSum[i][j] =
            matrix[i - 1][j - 1] +
            prefixSum[i - 1][j] +
            prefixSum[i][j - 1] -
            prefixSum[i - 1][j - 1];
    }
}

// 결과 저장 배열
const result = [];

// 각 쿼리에 대해 부분 합 계산
for (const [i, j, x, y] of queries) {
    const sum =
        prefixSum[x][y] -
        (prefixSum[i - 1][y] || 0) -
        (prefixSum[x][j - 1] || 0) +
        (prefixSum[i - 1][j - 1] || 0);
    result.push(sum);
}

// 정답 출력
console.log(result.join('\n'));
