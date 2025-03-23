arr = list(map(int, input().split()))
t=0
for i in range(1,len(arr)-1):
    if arr[i-1]<arr[i]>arr[i+1]:
        t+=1
print(t)