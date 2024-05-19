function solution(want, number, discount) {
    var answer = 0;
    let sum = 0;
    number.map((x)=>{
        sum += x;
    })

    for(let i=0; i<=discount.length-10; i++ ){
        let list = {};
        want.map((w)=>{
            list[w] = 0;
        })
        for(let j=i; j<i+10; j++){
            list[discount[j]] += 1;
        }
        let check = 0;
        Object.values(list).map((m,idx)=>{
            if(m < number[idx] && m != NaN){
                check = -1;
            }
        })    
        if(check == 0){
            answer += 1;
        }
    }
    
    
    return answer;
}