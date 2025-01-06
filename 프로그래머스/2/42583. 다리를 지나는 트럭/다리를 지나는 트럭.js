function solution(bridge_length, weight, truck_weights) {
    // 다리를 나타내는 큐 초기화 (다리 길이만큼 0으로 채움)
    const bridge = new Array(bridge_length).fill(0);
    let currentWeight = 0;  // 현재 다리 위의 무게
    let time = 0;  // 경과 시간
    
    // 첫 번째 트럭을 다리에 올림
    currentWeight += truck_weights[0];
    bridge.shift();
    bridge.push(truck_weights.shift());
    time++;
    
    // 모든 트럭이 다리를 건널 때까지 반복
    while(currentWeight > 0) {  // 다리 위에 트럭이 있는 동안
        // 다리의 맨 앞 트럭을 내림
        currentWeight -= bridge.shift();
        
        // 대기 중인 트럭이 있고, 다리가 무게를 견딜 수 있으면
        if(truck_weights.length > 0 && 
           currentWeight + truck_weights[0] <= weight) {
            currentWeight += truck_weights[0];
            bridge.push(truck_weights.shift());
        } else {
            bridge.push(0);  // 트럭이 못 올라가면 0을 넣어 다리 길이 유지
        }
        
        time++;
    }
    
    return time;
}
