function solution(s) {
    var answer = s;
    const list = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    list.map((word,index)=>{
        answer = answer.split(word).join(index);
    })
    return parseInt(answer);
}