const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input.shift());
let list = input[0].split(' ').map(Number);

// 정렬된 리스트 생성 (중복 제거)
let sortedArr = [...new Set(list)].sort((a, b) => a - b);

// Map을 사용하여 숫자의 정렬된 위치를 저장
let indexMap = new Map();
sortedArr.forEach((ele, index) => {
  indexMap.set(ele, index);
});

// 원래 리스트의 값을 indexMap에서 찾아 결과 배열 생성
let result = list.map((ele) => indexMap.get(ele));

console.log(result.join(' '));
