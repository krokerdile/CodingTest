function solution(clothes) {
    // 의상 종류별로 나누기
    const clothesMap = clothes.reduce((acc, [name, type]) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    // 각 의상 종류마다 선택할 수 있는 경우의 수를 계산
    let combinations = 1;
    for (let type in clothesMap) {
        combinations *= (clothesMap[type] + 1); // 선택하지 않는 경우 포함
    }

    // 아무것도 선택하지 않는 경우를 뺌
    return combinations - 1;
}
