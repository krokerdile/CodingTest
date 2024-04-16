
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results;
}

function solution(number) {
    var answer = 0;
    const result = getCombinations(number, 3);
    console.log(result);
    result.map((list)=>{
        if(list[0]+list[1]+list[2] == 0){
            answer += 1;
        }
    })
    return answer;
}
