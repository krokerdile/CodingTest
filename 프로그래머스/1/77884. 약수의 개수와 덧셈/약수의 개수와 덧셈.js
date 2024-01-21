function solution(left, right) {
    var answer = 0;
    // let arr = sol(right);
    for(let i=left; i<=right; i++){
        let cnt=0;
        for(let j=1; j<=i; j++){
            if(i%j == 0){
                cnt++;
            }
        }
        if(cnt % 2 ==0){
            answer += i;
        }else{
            answer -= i; 
        }
    }
    
    return answer;
}

function sol(right){
    let arr = Array(right+1).fill(true).fill(false, 0, 2)
    for(let i=2; i<=right; i++){
        if (arr[i]) {
          for (let j = i * i; j <= right; j += i) {
            arr[j] = false;
          }
        }
    }
    return arr;
}