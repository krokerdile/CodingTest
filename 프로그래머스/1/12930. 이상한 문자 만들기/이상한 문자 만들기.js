function solution(s) {
    var answer = [];
    
    let list = s.split(' ');
    list.map((word)=>{
        let temp = '';
        word.split('').map((i, index)=>{
            if(index % 2 == 0){
                temp += i.toUpperCase();
            }else{
                temp += i.toLowerCase();
            }
        })
        answer.push(temp);
    })
    
    answer = answer.toString().split(',').join(' ');
    
    return answer;
}