function solution(numbers) {
    var answer = [];
    let list = { };
    
    numbers.map((x,idx1)=>{
        numbers.map((y,idx2)=>{
            if(idx1!= idx2){
                list[x+y] = x+y;
            }
        })
    })
    
   for(let key in list){
       answer.push(list[key]);
   }
    
    return answer;
}