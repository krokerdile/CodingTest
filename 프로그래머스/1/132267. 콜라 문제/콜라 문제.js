function solution(a, b, n) {
    var answer = 0;
    let temp = n; 
    while(1){
        answer += parseInt(temp/a)*b;
        temp = temp % a + parseInt(temp / a)*b;
        console.log(temp,parseInt(temp/a)*b);
        
        if(temp < a){
            break;
        }
    }
    return answer;
}