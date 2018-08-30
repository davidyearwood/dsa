class Stack {
    constructor(size) {
        this._maxSize = size; 
        this._stack = []; 
        this._top = -1; 
    }

    push(item) {
        if (!this.isFull()) {
            this._stack[++this._top] = item; 
        } else {
            throw new Error("Stack is full");
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        } else {
            return this._stack[this._top--];
        }
    }

    peek() {
        return this._stack[this._top]; 
    }

    isEmpty() {
        return this._top === -1; 
    }

    isFull() {
        return (top === this._maxSize - 1);
    }
}

module.exports = Stack; 