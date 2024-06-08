function solution(dirs) {
    var answer = 0;
    
    let list = {"U":[0,1],"D":[0,-1],"R":[1,0],"L":[-1,0]};
    let start = [0,0];
    
    let visitedPaths = new Set();
    
    dirs.split('').forEach((word) => {
        let next = [start[0] + list[word][0], start[1] + list[word][1]];
        
        // 좌표가 -5와 5 사이인지 확인
        if(Math.abs(next[0]) <= 5 && Math.abs(next[1]) <= 5){
            // 경로를 양방향으로 기록
            let path1 = `${start[0]},${start[1]} -> ${next[0]},${next[1]}`;
            let path2 = `${next[0]},${next[1]} -> ${start[0]},${start[1]}`;
            
            // 경로를 Set에 추가
            visitedPaths.add(path1);
            visitedPaths.add(path2);
            
            // 시작점을 다음 위치로 업데이트
            start = next;
        }
    });
    
    // 고유한 경로의 수 계산
    answer = visitedPaths.size / 2;
    return answer;
}
