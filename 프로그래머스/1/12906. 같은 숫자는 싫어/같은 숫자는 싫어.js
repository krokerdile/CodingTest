function solution(arr)
{
    var answer = [];
    let recent = 0; 
    let list = [];
   
    arr.map((num,inx)=>{
        if(list.length ==0){
            answer.push(num);
            list.push(num);
        }else{
            if(list[0]!=num){
                list.pop();
                answer.push(num);
                list.push(num);
            }else{
                
            }
        }
    })
    
    return answer;
}