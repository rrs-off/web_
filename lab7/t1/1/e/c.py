def x (a,b):
    if a==1 and b==0:
        return 1
    if a==0 and b==1:
        return 1
    else:
        return 0

a,b = map(int, input().split())
print(x(a,b))