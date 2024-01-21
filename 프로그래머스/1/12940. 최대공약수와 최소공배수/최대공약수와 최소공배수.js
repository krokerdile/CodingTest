function solution(n, m) {
    var answer = [0,0];
    if(n>m){
        let temp =n;
        n = m;
        m = temp;
    }
    for(let i=1; i<=n; i++){
        if(n%i == 0 && m % i ==0){
            answer[0] = i;
        }
    }
    let num = m;
    while(1){
        if(num % m == 0 && num % n == 0){
            answer[1] = num;
            break;
        }else{
            num+=1;
        }
    }
    return answer;
}