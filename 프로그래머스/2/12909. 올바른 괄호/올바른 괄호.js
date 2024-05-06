function solution(s){
    var answer = true;

    let list = [];
    
    let temp = s.split("");
    
    temp.map((q)=>{
        let len = list.length;
        if(list.length == 0 | q == '('){
            list.push(q);
        }
        if(q == ')'){
            if(list[len-1] == '('){
                list.pop();
            }
        }
    })
    if(list.length > 0){
        answer = false;
    }
    return answer;
}