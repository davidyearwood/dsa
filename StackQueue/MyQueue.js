// Implement a MyQueue class which implements a queue using two stacks
const Stack = require('./Stack');

class MyQueue {
    constructor(s) {
        this._e = new Stack(s);
        this._d = new Stack(s);
        this._sizeLimit = s;
        this._itemsCount = 0;
    }
    enqueue(item) {
        if (this.isFull()) {
            throw new Error("Queue is full.");
        }
        this._e.push(item);
        return ++this._itemsCount;
    }

    deque() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty.");
        }

        if (this._d.isEmpty() && !this._e.isEmpty()) {
            while (!this._e.isEmpty()) {
                this._d.push(this._e.pop());
            }
        }

        --this._itemsCount;
        return this._d.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty.");
        }

        if (this._d.isEmpty() && !this._e.isEmpty()) {
            while (!this._e.isEmpty()) {
                this._d.push(this._e.pop());
            }
        }

        return this._d.peek();

    }
    isFull() {
        return this._itemsCount === this._sizeLimit;
    }

    isEmpty() {
        return this._itemsCount === 0;
    }

    getSize() {
        return this._itemsCount; 
    }
}

module.exports = MyQueue;