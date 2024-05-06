function cal(ans,move){
    let temp = ans; 
    let res = 0; 
    while (1) {
        res += res
        temp += temp; 
        if (temp > move) {
            break;
        }
        console.log(temp,ans,move);
    }
    return res;
}

function solution(n)
{
    var ans = 0;
    let move = n;
    while(1){
        ans += 1;
        let tel = cal(ans, move);
        if(move - tel - 1 == 1 || move - tel - 1 == 0){
            ans += 1;
            break;
        }
    }
    
    return ans;
}