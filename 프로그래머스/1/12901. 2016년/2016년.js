function solution(a, b) {
    var answer = '';
    let mon = [31,29,31,30,31,30,31,31,30,31,30,31];
    let temp = 0;
    if(a > 1){
        for(let i = 0; i< a-1; i++){
            temp += mon[i];
        }
    }
    
    temp += b - 1; 
    console.log(temp);
        
    
    let day = ["FRI","SAT","SUN","MON","TUE","WED","THU",];
    console.log(temp % 7);
    answer = day[temp % 7]
    return answer;
}