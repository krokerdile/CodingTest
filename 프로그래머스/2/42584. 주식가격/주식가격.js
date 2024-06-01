function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);  // 결과를 저장할 배열
    const stack = [];  // 가격과 인덱스를 저장할 스택

    for (let i = 0; i < n; i++) {
        // 스택이 비어있지 않고, 현재 가격이 스택의 top 가격보다 작다면
        while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);  // 현재 인덱스를 스택에 추가
    }

    // 스택에 남아있는 인덱스들의 처리 (끝까지 가격이 떨어지지 않음)
    while (stack.length) {
        const j = stack.pop();
        answer[j] = n - 1 - j;
    }

    return answer;
}
