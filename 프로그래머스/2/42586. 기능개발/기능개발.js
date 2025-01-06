function solution(progresses, speeds) {
    var answer = [];
    
    let proList = progresses;
    let speList = speeds;
    
    while(!proList.every(num => num >= 100)){
        let endTask = 0; 
        for(let i=0; i<proList.length; i++){
            proList[i] += speList[i]; 
        }
        for(let i=0; i<proList.length; i++){
            if(proList[i] >= 100){
                endTask++;
            }else{
                break;
            }
        }
        for(let i=0; i<endTask; i++){
            proList.shift();
            speList.shift();
        }
        
        console.log(proList, endTask);
        if(endTask > 0) answer.push(endTask);
    }
    
    return answer;
}