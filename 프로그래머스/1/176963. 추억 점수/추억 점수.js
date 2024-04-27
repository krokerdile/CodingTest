function solution(name, yearning, photo) {
    var answer = [];
    photo.map((list)=>{
        let temp = 0;
        list.map((p)=>{
            let num = name.indexOf(p);
            if(num != -1){
                temp += yearning[num];
            }
        });
        answer.push(temp);
    })
    return answer;
}