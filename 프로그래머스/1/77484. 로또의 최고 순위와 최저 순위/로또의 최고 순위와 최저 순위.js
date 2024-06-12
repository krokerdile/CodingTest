function solution(lottos, win_nums) {
    var answer = [];
    
    let min = 0;
    let zeroCount = 0;
    
    for (let num of lottos) {
        if (num === 0) {
            zeroCount++;
        } else if (win_nums.includes(num)) {
            min++;
        }
    }
    
    let max = min + zeroCount;
    
    // 등수 계산 (6개 맞춘 경우 1등, 5개 맞춘 경우 2등, ... , 1개 맞춘 경우 6등, 0개 맞춘 경우 6등)
    const rank = (count) => (count >= 2 ? 7 - count : 6);
    
    answer.push(rank(max));
    answer.push(rank(min));
    
    return answer;
}