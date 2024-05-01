function solution(A,B){
    var answer = 0;
    A = A.sort((a,b)=>{
        if(a>b) return 1;
        if(a==b) return 0;
        if(a<b) return -1;
    });
    B = B.sort((a,b)=>{
        if(a>b) return -1;
        if(a==b) return 0;
        if(a<b) return 1;
    });
    
    A.map((a,idx)=>{
        let temp = 0
        temp = a*B[idx];
        answer += temp;
    })

    return answer;
}