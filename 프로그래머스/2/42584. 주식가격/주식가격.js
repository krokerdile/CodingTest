function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];  
    
    for(let i = 0; i < prices.length; i++) {
        while(stack.length > 0 && prices[i] < prices[stack[stack.length-1]]) {
            const lastIndex = stack.pop();
            answer[lastIndex] = i - lastIndex;  
        }
        stack.push(i);  
    }
    
    while(stack.length > 0) {
        const lastIndex = stack.pop();
        answer[lastIndex] = prices.length - 1 - lastIndex;
    }
    
    return answer;
}