class Stack {
    constructor(s) {
        this._sizeLimit = s;
        this._top = -1;
        this._stack = [];
        this._min = [];
    }

    min() {
        console.log(this._min);
        return this._min[this._top];
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }

        return this._stack[this._top--];
    }

    push(item) {
        if (this.isFull()) {
            throw new Error("Stack is full.");
        }
        
        if (this.isEmpty()) {
            ++this._top; 
            this._stack[this._top] = item;
            this._min[this._top] = item;

            return this.length(); 
        }

        if (item < this._min[this._top]) {
            ++this._top;
            this._min[this._top] = item; 
            this._stack[this._top] = item;

            return this.length(); 
        } else {
            ++this._top; 
            this._min[this._top] = this._min[this._top - 1];
            this._stack[this._top] = item; 

            return this.length();
        }

    }

    length() {
        return this._top + 1;
    }

    peek() {
        return this._stack[this._top];
    }

    isEmpty() {
        return this._top === -1;
    }

    isFull() {
        return (this._top === this._sizeLimit - 1);
    }
}


module.exports = Stack;