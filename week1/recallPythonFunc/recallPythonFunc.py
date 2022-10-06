class DataTypes:
    def __init__(self):
        self.types = []
    
    def add(self, type):
        self.types.append(type)

    def addNum(self, num):
        self.add(int(num))

    def addStr(self, string):
        self.add(str(string))

    def addDict(self, list):
        self.add({list[i]: list[i + 1] for i in range(0, len(list), 2)})

    def addTuple(self, tupe):
        self.add(tuple(tupe))

    def getList(self):
        return tuple(self.types)

myList = DataTypes()

myList.addNum('2')
myList.addStr(13)
myList.addDict(['a', 1, 'b', 2, 'c', 3])
myList.addTuple('Hello')

print(myList.getList())