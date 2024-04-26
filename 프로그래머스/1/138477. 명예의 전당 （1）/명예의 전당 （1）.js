function solution(k, score) {
    var answer = [];
    let list = [];
    
    score.map((sco)=>{
        list.push(sco);
        list.sort((a,b)=>{
            if(a>b) return -1;
            if(a==b) return 0;
            if(a<b) return 1;
        })
        if(list.length >= k){
            answer.push(list[k-1]);
        }else{
            answer.push(list[list.length-1]);
        }
    })
    
    return answer;
}