function solution(arr) {
    var answer = 0;
    temp = Math.max.apply(null,arr);
    console.log(temp);
    while(1){
        if(arr.some((a)=>temp % a != 0)){
            temp += 1;
        }
        else{
            answer = temp;
            break;
        }
    }
    
    return answer;
}