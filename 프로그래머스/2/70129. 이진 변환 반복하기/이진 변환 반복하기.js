function solution(s) {
    var answer = [0,0];
    let t = s;
    while(1){
        let def = t.split("").map(Number).filter(n => n === 0).length;
        
        console.log(t,def)
        t = t.split("0").join("").length.toString(2);
       
        let aft = t.split("").map(Number).filter(n => n === 0).length;
        console.log(t,aft)
        answer[0] += 1;
        answer[1] += def;
         if(t == 1){
            break;
        }
    }
    
    return answer;
}