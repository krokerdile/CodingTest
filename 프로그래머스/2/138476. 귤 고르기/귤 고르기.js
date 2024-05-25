function solution(k, tangerine) {
    var answer = 0;
    
    let list = {};
    
    tangerine.map((t)=>{
        if(!list[t]){
            list[t] = 0;
        }
        list[t] += 1;
    })
    list = Object.entries(list).sort(([, a], [, b]) => b - a);
    let sum = 0;
    for(let i=0; i<list.length; i++){
        sum += list[i][1];
        answer += 1;
        if(sum >= k){
            break;
        }
    }
    return answer;
}