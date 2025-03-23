n=int(input())
a=[]
total=0
for i in range(n):
    g=int(input())
    a.append(g)
for i in range(n):
    total=total+a[i]
print(total)
