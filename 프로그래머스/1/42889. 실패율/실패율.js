function solution(N, stages) {
    var answer = [];
    
    // 각 스테이지별 실패율을 저장할 리스트 초기화
    let list = Array(N).fill(0);
    stages.sort((a, b) => a - b); // 오름차순 정렬
   
    let totalPlayers = stages.length; // 전체 플레이어 수
    
    for (let i = 1; i <= N; i++) {
        let failedPlayers = stages.filter(stage => stage === i).length; // 해당 스테이지에 머물러 있는 플레이어 수
        if (totalPlayers > 0) {
            list[i - 1] = failedPlayers / totalPlayers; // 실패율 계산
            totalPlayers -= failedPlayers; // 전체 플레이어 수에서 해당 스테이지의 플레이어 수를 빼줌
        } else {
            list[i - 1] = 0; // 남아 있는 플레이어가 없으면 실패율 0
        }
    }
    
    // 실패율을 기준으로 내림차순 정렬. 실패율이 같으면 스테이지 번호 기준 오름차순 정렬
    let dict = list.map((x, idx) => [idx + 1, x]);
    dict.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    
    // 정렬된 스테이지 번호를 answer 배열에 담아 반환
    answer = dict.map(stage => stage[0]);
    
    return answer;
}
