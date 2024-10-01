# 고속도로 위에 N개의 센서 설치
# 집중국을 몇 개 세울 지 겨렂ㅇ해야 됨
# 센서 수신 가능영역 
# N 개의 센서가 1개의 집중구과는 연결 되어 있어야 함.

sensor = int(input());
K = int(input());

list = list(map(int, input().split()));

list.sort();

# 사이 리스트
s_list = [];

if sensor <= K:
    print(0);

else:
    for i in range(1,len(list)):
        s_list.append(abs(list[i-1]-list[i]));

    s_list.sort(reverse=True);

    for i in range(K-1):
        s_list.pop(0)

    print(sum(s_list));
