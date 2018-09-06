class Queue {
    constructor() {
        this._head = 0; 
        this._tail = -1; 
        this._size = 0; 
        this._queue = []; 
    }

    insert(n) { 
        this._queue[++this._tail] = n;
        return ++this._size;  
    }

    remove() {
        if(!this.isEmpty()) {
            this._size--; 
            return this._queue[this._head++]; 
        }

        throw new Error("Queue is empty");
    }

    peek() {
        if (!this.isEmpty()) {
            return this._queue[this._head];
        }

        return null;
    }
    
    getSize() {
        return this._size; 
    }

    isEmpty() {
        var isEmpty = this._size === 0; 
        
        if (isEmpty) {
            this._resetQueue();
            return isEmpty; 
        }

        return isEmpty; 
    }

    _resetQueue() {
        this._head = 0;
        this._tail = 0;
        this._size = 0; 
    }
}

module.exports = Queue;