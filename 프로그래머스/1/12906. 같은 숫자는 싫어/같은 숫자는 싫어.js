function solution(arr)
{
    var answer = [];

    arr.forEach((ele,idx)=>{
        let length = answer.length;
        if(length == 0){
            answer.push(ele);
        }else{
            if(answer[length - 1] != ele){
                answer.push(ele)
            }
        }
    })
    
    return answer;
}