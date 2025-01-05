function solution(participant, completion) {
    var answer = '';
    
    let partMap = new Map();
    
    participant.forEach((part)=>{
        if(!partMap.has(part)){
            partMap.set(part,1);
        }
        else{
            partMap.set(part, partMap.get(part)+1);
        }
    })
    
    completion.forEach((com)=>{
        if(partMap.get(com) > 0){
            partMap.set(com, partMap.get(com)-1);
        }
    })
    let keys = Array.from(partMap.keys());
    
    keys.forEach((key)=>{
        if(partMap.get(key) > 0){
            answer = key;
        }
    })
    
    return answer;
}