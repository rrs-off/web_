def min_number(a, b, c, d):
    return min(a, b, d, c)

a, b, c ,d = map(int, input().split())
print(min_number(a, b, c, d))