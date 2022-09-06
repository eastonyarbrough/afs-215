# Original function
# def kata():
#     user_num = input('Please enter a number: ')
#     parsed = int(user_num)

#     if parsed == 1:
#         print(1)
#     elif parsed == 2:
#         print(2)
#     elif parsed == 3:
#         print('Pepsi')
#     elif parsed == 5:
#         print('Coke')

# Modified function
def kata():
    user_num = input('Please enter a number: ')
    parsed = int(user_num)

    if parsed == 0:
        return
    elif parsed == 1:
        print(1)
    elif parsed == 2:
        print(2)
    elif parsed % 3 == 0 and not parsed % 5 == 0:
        print('Pepsi')
    elif parsed % 5 == 0 and not parsed % 3 == 0:
        print('Coke')
    elif parsed % 3 == 0 and parsed % 5 == 0:
        print('PepsiCoke')

    kata()

kata()