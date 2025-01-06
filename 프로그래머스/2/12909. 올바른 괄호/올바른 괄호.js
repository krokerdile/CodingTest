function solution(s){
    var answer = true;

    let list = s.split("");
    let array = [];
    
    for(let i=0; i<list.length; i++){
        if(array.length == 0 && list[i] == ')'){
            answer = false;
            break;            
        }
        if(list[i] == '('){
            array.push('(');
        }else{
            if(array[array.length-1] == '('){
                array.pop();
            }
        }
    }
    if(array.length > 0) answer = false;
    
    return answer;
}