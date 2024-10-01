money = [500, 100, 50, 10, 5, 1];

left = 1000 - int(input());

answer = 0;

for i in range(6):
    if left % money[i] >= 0:
        answer += int(left/money[i]);
        left = left % money[i];

print(answer);
    


