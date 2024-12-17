function solution(n, t) {
    var answer = n;
    
    for(let i=0; i<t; i++){
        answer = calc(answer);
    }
    
    return answer;
}

function calc(answer){
    return answer*2;
}