function solution(elements) {
    var answer = 0;
    let list = {};
    
    for(let i=1; i<elements.length+1; i++){
        let temp = 0;
        for(let j=0; j<elements.length; j++){
            let sum =0;
            let test = [];
            for(let t=0; t<i; t++){
                sum += elements[(temp+t)%elements.length];
                test.push(elements[(temp+t)%elements.length]);
            }
            list[sum] = sum;
            temp += 1; 
        }
    }
    answer = Object.keys(list).length;
    return answer;
}