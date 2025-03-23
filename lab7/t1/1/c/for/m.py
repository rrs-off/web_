n=int(input())
a=[]
c=0
for i in range(n):
    g=int(input())
    a.append(g)
for i in range(n):
    if a[i]==0:
        c+=1
print(c)
