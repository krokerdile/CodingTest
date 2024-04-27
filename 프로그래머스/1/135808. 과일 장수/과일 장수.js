function solution(k, m, score) {
    var answer = 0;
    
    let list = score.sort((a,b)=>{
        if(a<b) return 1;
        if(a==b) return 0;
        if(a>b) return -1;
    });
    list = list.filter(v => v <= k);
    for(let i=0; i<list.length; i+=m){
        let temp = [];
        let n = (list.length - i-1) >= m ? m : list.length - i;
        if(n == m){
            for(let j=0; j<n; j++){
                temp.push(list[i+j]);
            }

            let min = Math.min.apply(null, temp);
            answer += min * temp.length;
        }
    }
    return answer;
}