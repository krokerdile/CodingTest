const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [K, M] = input[0].split(' ').map(Number);
const MAX = Math.pow(10, K);
const isPrime = new Array(MAX).fill(true);

// 소수 생성
function makePrime() {
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(MAX); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < MAX; j += i) {
                isPrime[j] = false;
            }
        }
    }
}

// M으로 나눌 수 있을 때까지 나누기
function dd(num, k) {
    if (num < k) return num;
    while (true) {
        if (num % k !== 0) return num;
        num = Math.floor(num / k);
    }
}

// 첫 번째 조건: 두 소수의 합
function cond1(n) {
    for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (i !== n - i && isPrime[i] && isPrime[n - i]) {
            return true;
        }
    }
    return false;
}

// 두 번째 조건: M으로 나누고 난 후 두 소수의 곱
function cond2(n, k) {
    n = dd(n, k);
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && isPrime[i] && isPrime[Math.floor(n / i)]) {
            return true;
        }
    }
    return false;
}

// 중복되지 않는 K자리 수인지 확인
function isValidNumber(num) {
    const digits = String(num).split('');
    return digits.length === K && new Set(digits).size === digits.length;
}

function solution() {
    // 소수 생성
    makePrime();
    
    // K자리 수의 시작과 끝
    const start = Math.pow(10, K-1);
    const end = Math.pow(10, K);
    
    let count = 0;
    
    // 각 숫자에 대해 조건 확인
    for (let num = start; num < end; num++) {
        if (isValidNumber(num) && cond1(num) && cond2(num, M)) {
            count++;
        }
    }
    
    return count;
}

console.log(solution());