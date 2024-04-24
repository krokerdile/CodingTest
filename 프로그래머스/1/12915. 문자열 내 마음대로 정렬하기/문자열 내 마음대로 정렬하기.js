function solution(strings, n) {
    return strings.sort((x, y) => {
        if (x[n] > y[n]) {
            return 1;
        } else if (x[n] < y[n]) {
            return -1;
        } else {
            if (x > y) {
                return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
        }
    });
}