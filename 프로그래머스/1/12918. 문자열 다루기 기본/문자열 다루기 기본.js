function solution(s) {
    var answer = true;
    s= s.split("");
    if(s.length==4 || s.length==6){
       s.map((s)=>{
           console.log(Number.isInteger(s));
          if(isNaN(s)){
              answer = false;
          }
       })
    }else{
        answer = false;
    }
    return answer;
}