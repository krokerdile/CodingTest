function solution(n) {
    var answer = 0;
    n = n.toString(3);
    n = n.split("").reverse().join("");
    answer =parseInt(n,3);
    return answer;
}