function solution(s)
{
    var answer = 0;
    
    let temp = [];
    if(s.length % 2 == 1){
        answer = 0;
    }else{
        s.split("").map((s)=>{
            if(temp.length == 0){
                temp.push(s);
            }else{
                if(temp[temp.length-1]==s){
                    temp.pop();
                }else{
                    temp.push(s);
                }
            }
        })
        if(temp.length > 0){
            answer = 0;
        }else{
            answer = 1;
        }
    }
    

    return answer;
}