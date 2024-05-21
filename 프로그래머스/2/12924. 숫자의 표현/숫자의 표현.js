function solution(n) {
    let count = 1;
    for (let j = 1; j < n; j++) {
        let m1 = j;
        let sum = j;
        while (true) {
            if (sum === n) {
                count++;
                break;
            } else if (sum > n) {
                break;
            }
            m1++;
            sum += m1;
        }
    }
    return count;
}
