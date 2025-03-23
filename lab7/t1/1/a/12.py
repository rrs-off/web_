n=int(input())
    
    # hours

if n//3600>=24:
    h=(n//3600)-24
    if h<10:
        h1="0"+str(h)
    else:
        h1=str(h)

if n//3600<24:
    h=n//3600
    if h<10:
        h1="0"+str(h)
    else:
  
        h1=str(h)
        
    
    # min

if n//3600<60:
    m1="00"
if n%3600>60:
    m=(n%3600)//60
    if m<10:
        m1="0"+str(m)
    else:
        m1=str(m)

    # seconds

s = n%3600
if s>60:
    s=s-60
    if s<10:
        s1="0"+str(s)
    if s>10:
        s1=str(s)
if s<=60:
    if s<10:
        s1="0"+str(s)
    if s>10:
        s1=str(s)


print(h1+":"+m1+":"+s1)