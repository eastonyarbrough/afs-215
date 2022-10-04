import pytest
from strings import Strings

# def testCanCallStrings():
#     Strings()
#
# def testCanAddString():
#     testList = Strings()
#     assert testList.push('Hello') == 'Hello was added.'
#
# def testCanPopString():
#     testList = Strings()
#     testList.push('Hello')
#     assert testList.pop() == 'Hello was removed.'
#
# def testCanSearchString():
#     testList = Strings()
#     testList.push('Hello')
#     assert testList.search('Hello') == 'Hello was found at index 0.'
#
# def testCanEvaluate():
#     testList = Strings()
#     testList.push('Hello')
#     testList.push('World')
#     assert testList.evaluate() == ['Hello', 'World']


@pytest.fixture
def testList():
    testList = Strings()
    testList.push('Hello')
    return testList

def testCanCallStrings():
    Strings()

def testCanAddString(testList):
    assert testList.push('World') == 'World was added.'

def testCanPopString(testList):
    assert testList.pop() == 'Hello was removed.'

def testCanSearchString(testList):
    assert testList.search('Hello') == 'Hello was found at index 0.'

def testCanEvaluate(testList):
    assert testList.evaluate() == ['Hello']