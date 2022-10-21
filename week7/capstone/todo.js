class Todo {
    constructor(task, complete=false) {
        this.task = task;
        this.complete = complete;
    }

    getTask() {
        return this.task;
    }

    editTask(altTask) {
        this.task = altTask;
        return `This task was changed to '${altTask}'`;
    }

    toggleTask() {
        this.complete = !this.complete;
        return `This task completion was set to ${this.complete}`;
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
        return `${item.task} was removed`;
    }

    pop() {
        const item = this.list[this.list.length-1];
        this.list.splice(this.list.length-1, 1);
        return `${item.task} was removed`;
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

    editList() {
        
    }

    getList() {
        const temp = [...this.list];
        console.log('------ TODO LIST ------');
        const returnList = (arr, count) => {
            if (arr.length > 0) {
                count++
                console.log(`${count}.) ${arr[0].task} - Complete?: ${arr[0].complete}`);
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

myList = new List();

console.log(myList.push('Do the dishes, Fold the laundry, Cook dinner'));
console.log(myList.getList());

console.log(myList.push('Type the code, Do the tests'));
console.log(myList.getList());

console.log(myList.push('Insert just one thing'));
console.log(myList.getList());

console.log(myList.delete('Insert just one thing'));
console.log(myList.getList());

console.log(myList.shift());
console.log(myList.getList());

console.log(myList.pop());
console.log(myList.getList());