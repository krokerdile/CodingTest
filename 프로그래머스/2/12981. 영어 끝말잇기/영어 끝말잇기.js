function solution(n, words) {
    var answer = [0,0];

    let list = {};
    let temp = 0;
    let bef = '';
    for(let i=0; i<words.length; i++){
        
        console.log(i,temp,temp % n);
        let word = words[i];
        if(temp % n == 0){
            temp = 0;
        }
        if(list[word]==undefined){
            console.log('없는 친구');
            list[word]=1;
        }else{
            console.log('같은 친구 있음');
            answer[0] = temp % n + 1;
            answer[1] = parseInt(i/n+1);
            break;
        }
        if(i != 0){
            if(word.slice(0,1) != words[i-1].slice(-1)){
                console.log('같지 않음');
                console.log(word.slice(0,1), words[i-1].slice(-1));
                answer[0]= temp % n + 1;
                answer[1] = parseInt((i)/n+1);
                break;
            }
        }
        temp += 1;
    }

    return answer;
}