function solution(n, m, section) {
    var answer = 0;
    let list = new Array(n).fill(1);
    section.map((m)=>{
        list[m-1] = 0;
    })
    list.map((x,idx)=>{
        if(x==0){
            for(let i=0; i<m; i++){
                if(idx + i > list.length){
                    break;
                }
                list[idx+i] = 1;
            }
            answer += 1; 
        }
    })
    return answer;
}