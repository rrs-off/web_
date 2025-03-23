a=list(map(int, input().split()))
n=0
for i in range(len(a)):
    if a[i]>0:
        n+=1
print(n)