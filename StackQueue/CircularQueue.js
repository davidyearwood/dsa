class CircularQueue {
    constructor(s) {
        this._head = 0;
        this._tail = -1;
        this._itemsCount = 0;
        this._maxSize = s;
        this._queue = [];
    }

    getSize() {
        return this._itemsCount;
    }

    insert(n) {
        if (this.isFull()) {
            throw new Error("Queue is full");
        }

        if (this._tail === this._maxSize - 1) {
            this._tail = -1;
        }

        this._queue[++this._tail] = n;

        return ++this._itemsCount;
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        var temp = this._queue[this._head];

        if (this._head === this._maxSize - 1) {
            this._head = 0;
        } else {
            ++this._head;
        }

        this._itemsCount--;

        return temp;
    }

    peek() {
        return this._queue[this._head];
    }

    isEmpty() {
        return this._itemsCount === 0;
    }

    isFull() {
        return this._itemsCount === this._maxSize;
    }

    // display
    displayItems() {
        var itemsToPrint = this._itemsCount,
            currentPos = this._head,
            output = "";
        while (itemsToPrint > 0) {
            output = (output === "") ?
                this._queue[currentPos++] : output + ", " +
                this._queue[currentPos++];

            if (currentPos === this._maxSize) {
                currentPos = 0;
            }

            itemsToPrint--;
        }

        return output;
    }
}

module.exports = CircularQueue;