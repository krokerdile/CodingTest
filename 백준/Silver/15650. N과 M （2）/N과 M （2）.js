const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
 
function getPermutation(arr, selectNumber) {
  const result = []; //결과를 담을 배열
  if (selectNumber === 1) {
    return arr.map((value) => [value]); //1개 선택은 모든 원소를 그대로 return
  }
 
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(index + 1)]; //해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutation(rest, selectNumber - 1); //나머지에 대한 순열을 구하기
    const attached = permutations.map((permutation) => [fixed, ...permutation]); //돌아온 순열에 떼 놓은 fixed값 붙이기
 
    result.push(...attached);
  });
 
  return result;
}
 
const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);
const numbers = [];
for (let i = 1; i <= N; i++) numbers.push(i); //1부터 N까지의 수를 담은 배열
const result = getPermutation(numbers, M); //numbers와 M으로 순열함수 호출
//result의 각 순열 결과에 대해 한 칸 띄워 출력하기
for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}