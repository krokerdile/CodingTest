function solution(s) {
    var answer = '';
    let list = s.split(" ").map(Number);
    answer += Math.min.apply(null,list).toString();
    answer += ' ';
    answer += Math.max.apply(null,list).toString();
    
    return answer;
}