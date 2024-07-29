function solution(numbers) {
    let answer = []; 
    
    let length = numbers.length;
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            if(i !== j){
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    
    return [...new Set(answer)].sort((a,b)=>a-b);
}