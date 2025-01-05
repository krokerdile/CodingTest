function solution(clothes) {
    let answer = 1;
    
    // 의상 종류별 개수를 저장하는 Map
    let map = new Map();
    
    // 의상 종류별 개수 계산
    clothes.forEach((cloth) => {
        map.set(cloth[1], map.has(cloth[1]) ? map.get(cloth[1]) + 1 : 1);
    });
    
    // 각 의상 종류별로 (의상 개수 + 1)을 곱함
    for (let count of map.values()) {
        answer *= (count + 1);
    }
    
    // 아무것도 입지 않는 경우 제외
    return answer - 1;
}