function lit(num){
    let result = []
    let index = 1;
     while (index <= Math.sqrt(num)) {
      if (num % index === 0) {
        result.push(index)
        if (num / index !== index) result.push(num / index)
      }
      index++
    }
    result.sort((a, b) => a - b)
    return result;
}

function solution(number, limit, power) {
    var answer = 0;
    let list = [];
    let result = [];
    for(let i=0; i<number; i++){
        result.push(lit(i+1).length);
    }
    for(let i=0; i<result.length; i++){
        if(result[i] <= limit){
            answer += result[i]; 
        }else{
            answer += power;
        }
    }
    
    return answer;
}



 
    