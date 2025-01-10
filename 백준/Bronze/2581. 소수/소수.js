const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 에라토스테네스의 체를 이용한 소수 판별 함수
function getPrimeNumbers(num) {
  let arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

const M = parseInt(input[0]);
const N = parseInt(input[1]);
const primes = getPrimeNumbers(N);

let sum = 0;
let minPrime = -1;

// M부터 N까지의 소수를 찾아서 합과 최솟값 계산
for (let i = M; i <= N; i++) {
  if (primes[i]) {
    if (minPrime === -1) minPrime = i; // 최초의 소수를 최솟값으로 설정
    sum += i;
  }
}

// 결과 출력
if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(minPrime);
}
