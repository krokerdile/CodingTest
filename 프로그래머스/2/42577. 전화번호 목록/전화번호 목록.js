function solution(phone_book) {
    // 번호들을 정렬
    phone_book.sort();
    
    // 인접한 번호들만 비교
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}