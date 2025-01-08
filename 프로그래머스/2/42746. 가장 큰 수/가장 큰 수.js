function solution(numbers) {
    // 모든 숫자를 문자열로 변환하고 정렬
    const answer = numbers
        .map(n => n.toString())
        .sort((a, b) => {
            // a+b와 b+a를 직접 비교
            // 예: a=3, b=30 일 때
            // "330"과 "303"을 비교
            return (b + a) - (a + b);
        })
        .join('');
    
    // 맨 앞이 0인 경우 (모든 입력이 0인 경우) "0" 반환
    return answer[0] === '0' ? '0' : answer;
}