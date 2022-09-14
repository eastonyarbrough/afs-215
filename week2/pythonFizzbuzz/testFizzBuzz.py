from pythonFizzBuzz import PepsiCoke

numberParsed = 15

def test1():
    assert PepsiCoke(numberParsed) == 1

def test2():
    assert PepsiCoke(numberParsed) == 2

def testPepsi():
    assert PepsiCoke(numberParsed) == 'Pepsi'

def testCoke():
    assert PepsiCoke(numberParsed) == 'Coke'

def testPepsiCoke():
    assert PepsiCoke(numberParsed) == 'PepsiCoke'