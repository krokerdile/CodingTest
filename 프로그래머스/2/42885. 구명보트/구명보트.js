function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b); // 숫자 정렬

    let start = 0;
    let end = people.length - 1;

    while (start <= end) {
        if (people[start] + people[end] <= limit) {
            start++;
        }
        end--;
        answer++;
    }

    return answer;
}
