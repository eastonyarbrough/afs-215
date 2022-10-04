class Strings:
    def __init__(self):
        self.list = []

    def push(self, str):
        self.list.append(str)
        return f'{str} was added.'

    def pop(self):
        return f'{self.list.pop()} was removed.'

    def search(self, str):
        try:
            found = self.list.index(str)
            return f'{self.list[found]} was found at index {found}.'
        except ValueError:
            return 'No matching string found.'

    def evaluate(self):
        return self.list