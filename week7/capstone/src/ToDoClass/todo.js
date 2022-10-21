class Todo {
    constructor(task, complete=false, priority=4) {
        this.task = task;
        this.complete = complete;
        this.priority = priority;
    }

    changePriority(num) {
        if (typeof num !== 'number' || num < 1 || num > 4) {
            return 'Please enter a valid priority number (1 - 4)';
        }
        this.priority = num;
        return `'${this.task}' has been set to priority ${num}`
    }

    toggleComplete() {
        this.complete = !this.complete;
        return `'${this.task}' completion was set to ${this.complete}`;
    }
}

class List {
    constructor() {
        this.list = [];
    }

    push(items) {
        const tasks = items.split(', ');
        const buildList = (arr) => {
            if (arr.length > 0) {
                const item = new Todo(arr[0]);
                this.list.push(item)
                arr.splice(0, 1);
                return buildList(arr);
            }
            return;
        }
        buildList(tasks);
        return 'Item(s) added to Todo List';
    }

    shift() {
        const item = this.list[0];
        this.list.splice(0, 1);
        return `'${item.task}' was removed`;
    }

    pop() {
        const item = this.list[this.list.length-1];
        this.list.splice(this.list.length-1, 1);
        return `'${item.task}' was removed`;
    }

    delete(task) {
        const index = this.list.findIndex(e => e.task === task);
        if (index === -1) {
            return `Error: '${task}' was not found in the list`;
        }
        const item = this.list[index];
        this.list.splice(index, 1);
        return `'${item.task}' was removed`;
    }

    editList(task, value) {
        const index = this.list.findIndex(e => e.task === task);
        if (index === -1) {
            return `Error: '${task}' was not found in the list`;
        }
        if (typeof value !== 'boolean' && (typeof value !== 'number' || value < 1 || value > 4)) {
            return `Error: '${value}' is not a valid value (true, false OR 1 - 4)`;
        }
        if (typeof value === 'boolean') {
            return this.list[index].toggleComplete();
        }
        else if (typeof value === 'number') {
            const temp = [...this.list];
            const priorityItem = this.list[index]
            const rearrange = (count) => {
                if (temp.length-1 > 0) {
                    if (value < this.list[count].priority) {
                        const lowerItem = this.list[count]
                        this.list[count] = this.list[index]
                        this.list[index] = lowerItem;
                    }
                    temp.splice(temp.length-1, 1);
                    count++
                    return rearrange(count);
                }
                return;
            }
            rearrange(0);
            return priorityItem.changePriority(value);
        }
    }

    getList() {
        const temp = [...this.list];
        console.log('------ TODO LIST ------');
        const returnList = (arr, count) => {
            if (arr.length > 0) {
                count++
                console.log(`${count}.) ${arr[0].task} / Complete?: ${arr[0].complete} / Priority: ${arr[0].priority}`);
                arr.splice(0, 1);
                return returnList(arr, count);
            }
            return;
        }
        returnList(temp, 0);
        console.log('-----------------------');
        return 'Todo List successfully returned'
    }
}

module.exports = List;

// myList = new List();

// console.log(myList.push('Do the dishes, Fold the laundry, Cook dinner, Type the code'));
// console.log(myList.push('Do the tests'));

// console.log(myList.editList('Cook dinner', 3))
// console.log(myList.editList('Type the code', 1))
// console.log(myList.editList('Fold the laundry', 4))
// console.log(myList.editList('Do the dishes', 3))
// console.log(myList.editList('Do the tests', 2))

// console.log(myList.editList('Type the code', true))
// console.log(myList.editList('Do the tests', true))

// console.log(myList.getList());