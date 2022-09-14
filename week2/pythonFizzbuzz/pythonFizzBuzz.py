def PepsiCoke(num):
    if num == 1:
        return 1
    elif num == 2:
        return 2
    elif num % 3 == 0 and not num % 5 == 0:
        return 'Pepsi'
    elif num % 5 == 0 and not num % 3 == 0:
        return 'Coke'
    elif num % 3 == 0 and num % 5 == 0:
        return 'PepsiCoke'

entered_num = 15

def test1():
    assert PepsiCoke(entered_num) == 1

def test2():
    assert PepsiCoke(entered_num) == 2

def testPepsi():
    assert PepsiCoke(entered_num) == 'Pepsi'

def testCoke():
    assert PepsiCoke(entered_num) == 'Coke'

def testPepsiCoke():
    assert PepsiCoke(entered_num) == 'PepsiCoke'