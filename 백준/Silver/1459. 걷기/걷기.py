# 집의 위치 (x,y)
# 한 블록 가는데 걸리는 시간 w
# 대각선으로 한 블록 가로 지르는 시간 S

def min_time_to_home(X, Y, W, S):
    # 가로와 세로로만 이동하는 경우
    horizontal_vertical_time = (X + Y) * W
    
    # 대각선으로 이동하는 경우 (짝수로 맞춤)
    remaining = max(X,Y)
    diagonal_time = 0
    # 대각선 이동이 유리한 경우
    if (X+Y) % 2 == 0:
        # 남은 거리가 짝수면 모두 대각선으로
        diagonal_time += remaining * S
    else:
        # 남은 거리가 홀수면 하나 빼고 대각선, 나머지 직선
        diagonal_time += (remaining - 1) * S + W

    # 평행이동 + 대각성 이동
    multiflex = (min(X,Y)*S) + (abs(X-Y)*W)
    
    return min(horizontal_vertical_time, diagonal_time, multiflex)


# 테스트 입력
X, Y, W, S = map(int, input().split())
result = min_time_to_home(X, Y, W, S)
print(result)