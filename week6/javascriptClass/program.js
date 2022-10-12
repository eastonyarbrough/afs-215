class Data {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return `${item} was added.`
    }

    pop() {
        const removed = this.data[this.length-1]
        delete this.data[this.length-1];
        this.length--;
        return `${removed} was removed.`
    }

    delete(item) {
        const arr = Object.values(this.data);
        const index = arr.findIndex(e => e === item);
        if (index === -1) {
            return `Error: No element found for ${item}.`;
        }
        else {
            delete this.data[index];
            this.length--;

            const compile = (count) => {
                if (count <= this.length) {
                    this.data[count-1] = this.data[count];
                    delete this.data[count];
                    return compile(count+1);
                }
                return
            }
            compile(index+1);

            return `${arr[index]} was removed.`
        }
    }

    search(item) {
        const arr = Object.values(this.data);
        const index = arr.findIndex(e => e === item);
        if (index === -1) {
            return `Error: No element found for ${item}.`;
        }
        else {
            return true;
        }
    }

    getArr() {
        return Object.values(this.data);
    }
}

module.exports = Data;