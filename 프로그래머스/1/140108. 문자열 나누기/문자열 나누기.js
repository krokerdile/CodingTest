function solution(s) {
    var answer = 0;
    let list = s.split("");
    let stack = [];
    list.map((x)=>{
        if(stack.length == 0){
            stack.push(x);
        }else{
            if(stack[0]==x){
                stack.push(x);
            }else{
                stack.pop();
            }
        }
        if(stack.length == 0){
            answer += 1;
        }
    })
    if(stack.length > 0){
        answer += 1;
    }
    return answer;
}