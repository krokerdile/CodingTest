function solution(t) {
    var answer = 0;
    let def = t.toString(2).split("").map(Number).filter(n => n === 1).length
    let n = t+1;
    while(1){
        let sec = n.toString(2);
        let temp = sec.split("").map(Number);
        let result = temp.filter(n => n === 1).length;
        if(def == result){
            answer = n;
            break;
        }
        n+=1;
    }
    
    return answer;
}