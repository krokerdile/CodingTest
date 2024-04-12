function solution(array, commands) {
    var answer = [];
    
    commands.map((command)=>{
        let temp = array.slice(command[0]-1,command[1]);
        temp = temp.sort((a, b) => a - b);
        answer.push(temp[command[2]-1]);
    })
    
    return answer;
}