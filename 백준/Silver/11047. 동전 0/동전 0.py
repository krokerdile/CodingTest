# N개 종류의 동전, 종류 별로 많이 가지고 있음
# 적절히 동전을 섞어서 합쳐서 K원이 나와야 됨.
# 필요한 동전의 최솟값을 구하시오

# N >> 동전 종류 개수
# K >> 동전 합쳐서 나와야 되는 결과값
N, K = map(int, input().split());

# num_list 동전 종류 리스트
num_list = [];

for i in range(N):
    num_list.append(int(input()));

num_list.sort(reverse=True);

answer = 0;

for i in num_list:
    answer += int(K /i);
    K = K % i;    

print(answer);

