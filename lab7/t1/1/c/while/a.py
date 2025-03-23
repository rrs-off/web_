import math
a=int(input())

i=1
while i<=a:  
    if math.sqrt(i)%1==0:
        print(i)
    i+=1