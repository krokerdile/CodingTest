function solutions(n) {
  const sieve = [0,0];

  for (let i = 2; i <= n; i++) {
    sieve[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (sieve[j] === 0) continue;
    for (let k = j + j; k <= n; k += j) {
      sieve[k] = 0;
    }
  }

  return sieve;
}

function combination(arr, num){
  const res = [];
  if(num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx+1);
    const combinations = combination(rest, num-1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  })
  return res;
}

function solution(nums) {
    var answer = 0;
    
    let list = combination(nums,3).map((three)=>{
        return three[0] + three[1] + three[2];
    })
    console.log(list);
    let temp = solutions(Math.max.apply(null,list));
    temp = temp.filter((t)=> t !=0);
    
    console.log(temp);
    
    list.map((x)=>{
        if(temp.indexOf(x)!=-1) answer += 1;
    })
    
    return answer;
}