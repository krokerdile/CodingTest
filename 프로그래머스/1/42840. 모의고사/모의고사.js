function solution(answers) {
    var answer = [];
    let point = [0,0,0];
    let lists= [[1,2,3,4,5], [2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    console.log(answers);
    answers.map((ans,idx)=>{
        lists.map((list,num)=>{
            let count = 0; 
            if(idx / list.length > 0){
                count = idx % list.length;
            }else{
                count = idx;
            }
            if(ans == list[count]){
                point[num] += 1;
            }
        })
    })
    
    console.log(Math.max(point));
    point.map((p,index)=>{
        if(Math.max.apply(null, point) == p){
            answer.push(index+1);
        }
    })
    return answer;
}