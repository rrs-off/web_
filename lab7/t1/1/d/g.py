a = list(map(int, input().split()))
m=max(a)
index=0
for i in range(len(a)):
    if a[i]==m:
        index=i
  
print(m,index)