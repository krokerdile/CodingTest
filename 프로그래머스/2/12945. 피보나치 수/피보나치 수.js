// function Fibonacci(n,t, bef, aft){
//     if(t == n-1){
//         let an = bef+aft;
//         return an;
//     }
//     return Fibonacci(n, t + 1, aft%1234567, (bef + aft)%1234567); 
// }

// function solution(n) {
//     var answer = 0;
//     let temp = 0;
//     temp = Fibonacci(n, 1, 0, 1);
//     answer = temp % 1234567;
//     return answer;
// }

function solution(n) {
    var ans = [0,1];
    if(n<=1) return ans[n];
    for(var i=2;i<n+1;i++){
        ans.push((ans[i-2]+ans[i-1])%1234567)
    }
    return ans[n];
}