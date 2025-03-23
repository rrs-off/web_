a=int(input())
a1=str(a)
a2=a1[::-1]

b=int(input())

if  a1==a2:
    if b==1:
        print("YES")
    else:
        print("NO")
if  a1!=a2:
    if b!=1:
        print("NO")
    else:
        print("YES")