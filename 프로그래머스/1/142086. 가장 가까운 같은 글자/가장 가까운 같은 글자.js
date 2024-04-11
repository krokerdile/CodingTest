function solution(s) {
    let list = new Array(26).fill(-1);
    let answer = [];
    s = s.split('');
    s.map((word,index)=>{
        console.log(list[word.charCodeAt()-97],index);
         if(list[word.charCodeAt()-97] != -1){
            answer.push(index-list[word.charCodeAt()-97]);
            list[word.charCodeAt()-97] = index;
        }else{
            answer.push(-1);
            list[word.charCodeAt()-97] = index;
        }
    })
    
    return answer;
}