function solution(n, t, m, p) {
    var answer = '';
    
    let i=0;
    let word = '';
    while(1){
        if(word.length > t*m) break;
        word += i.toString(n);
        i += 1;
    }
    word = word.toUpperCase();
    for(let i=0; i<t; i++){
        answer += word[i*m + p -1];
    }
    
    return answer;
}