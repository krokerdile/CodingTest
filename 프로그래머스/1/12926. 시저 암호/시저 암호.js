function solution(s, n) {
    var answer = '';
    
    const 알파벳수 = 26;
    s = s.split("");
    
    s.map((word)=>{
        if('a'<= word && word <= 'z'){
            answer += String.fromCharCode((word.charCodeAt() - 'a'.charCodeAt()+n)%알파벳수 +'a'.charCodeAt());
        }else if('A'<= word && word <= 'Z'){
              answer +=String.fromCharCode( (word.charCodeAt() - 'A'.charCodeAt()+n)%알파벳수 +'A'.charCodeAt());
        }else{
            answer += word;
        }
    })
    
    return answer;
}