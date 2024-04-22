function solution(participant, completion) {
    var answer = '';
    let list = {};
    participant.map((per)=>{
        if(per in list){
            list[per] += 1;
        }else{
            list[per] = 1;
        }
    })
    completion.map((com)=>{
        if(com in list){
            list[com] -= 1;
        }
    })
    
   for(key in list){
        if(list[key]==1){
            answer = key;
        }
    }
    
    return answer;
}