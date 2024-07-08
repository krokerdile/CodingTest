function solution(n, lost, reserve) {
    // 모든 학생이 체육복을 1개씩 가지고 있다고 가정
    let students = Array(n).fill(1);
    
    // 도난당한 학생들의 체육복 감소
    lost.forEach(student => students[student - 1]--);
    
    // 여벌 체육복이 있는 학생들의 체육복 증가
    reserve.forEach(student => students[student - 1]++);
    
    // 체육복 빌려주기
    for (let i = 0; i < n; i++) {
        if (students[i] === 0) {
            // 앞번호 학생에게 빌리기
            if (i > 0 && students[i - 1] > 1) {
                students[i]++;
                students[i - 1]--;
            }
            // 뒷번호 학생에게 빌리기
            else if (i < n - 1 && students[i + 1] > 1) {
                students[i]++;
                students[i + 1]--;
            }
        }
    }
    
    // 체육복이 1개 이상인 학생 수 계산
    let answer = students.filter(s => s > 0).length;
    
    return answer;
}