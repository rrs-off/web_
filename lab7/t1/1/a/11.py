n=int(input())
if n//60>=24:
    h=n//60-24
else:
    h=n//60
m=n-((n//60)*60)
print(h,m)