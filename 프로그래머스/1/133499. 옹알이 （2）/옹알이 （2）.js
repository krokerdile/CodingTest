function solution(babbling) {
    const pronunciations = ["aya", "ye", "woo", "ma"];
    
    let count = 0;
    
    babbling.forEach(word => {
        let originalWord = word;
        for (const pronunciation of pronunciations) {
            if (word.includes(pronunciation.repeat(2))) {
                return; // 같은 발음이 연속되는 경우를 제외합니다.
            }
            word = word.split(pronunciation).join(' ');
        }
        if (word.trim() === "") {
            count++;
        }
    });
    
    return count;
}

// 테스트 케이스