function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    goal.map((text)=>{
        const 카드1 = cards1.indexOf(text);
        const 카드2 = cards2.indexOf(text);
        console.log(text, 카드1, 카드2);
        if(카드1 | 카드2){
            if(카드1 == 0){
                cards1.splice(0,1);
            }else if(카드2 == 0){
                cards2.splice(0,1);
            }else{
                answer = "No";
            }
        }
    })
    return answer;
}