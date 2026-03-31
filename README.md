https://ds3426484-sys.github.io/proekt/



t = int(input("Температура в замке ="))
if 18 <= t <= 24:
    print("OK")
elif t <= -25:
    print("Включи обогреватель")
else:
    print("Включи кондиционер")
