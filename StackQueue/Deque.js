class Deque {

    constructor(s) {
        this._deque = [];
        this._head = 0;
        this._tail = 0;
        this._sizeLimit = s;
        this._dequeCount = 0;
    }

    enequeBack(n) {
        if (this.isFull()) {
            throw new Error("Deque is full");
        }

        if (this.isEmpty()) {
            this._deque[this._tail] = n;
            return ++this._dequeCount;
        }

        if (this._tail > this._sizeLimit) {
            this._tail = -1;
        }

        this._deque[++this._tail] = n;
        return ++this._dequeCount;
    }

    enequeFront(n) {
        if (this.isFull()) {
            throw new Error("Deque is full");
        }

        if (this.isEmpty()) {
            this._deque[this._head] = n;
            return ++this._dequeCount;
        }

        if (this._head - 1 < 0) {
            this._head = this._sizeLimit;
        }

        this._deque[--this._head] = n;
        return ++this._dequeCount;
    }

    dequeueFront() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }

        var temp = this._deque[this._head++];

        if (this._head > this._sizeLimit - 1) {
            this._head = 0;
        }

        this._dequeCount--;

        return temp;
    }

    dequeueBack() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }

        var temp = this._deque[this._tail--];

        if (this._tail < 0) {
            this._tail = this._sizeLimit - 1;
        }

        this._dequeCount--; 

        return temp; 

    }
    
    isFull() {
        return this._sizeLimit === this._dequeCount;
    }

    isEmpty() {
        return this._dequeCount === 0;
    }
}

module.exports = Deque;