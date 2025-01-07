function solution(citations) {
    // 내림차순 정렬
    citations.sort((a, b) => b - a);
    
    let hIndex = 0;
    
    for(let i = 0; i < citations.length; i++) {
        // 현재 논문의 인용수가 논문 개수(i+1)보다 크거나 같으면
        if(citations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            break;
        }
    }
    
    return hIndex;
}