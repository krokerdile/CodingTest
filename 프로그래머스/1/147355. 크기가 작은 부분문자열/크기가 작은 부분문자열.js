function solution(t, p) {
    var answer = 0;
    //p의 길이
    const p_length = p.length;
    const t_length = t.length;
    
    for(let i=0; i<t_length-p_length+1; i++){
        let sli = t.slice(i, i+p_length)
        console.log(sli);
        if(sli <= parseInt(p)){
            answer += 1;
        }
    }
    
    return answer;
}