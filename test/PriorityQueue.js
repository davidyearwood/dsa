// The priority queue shown in Listing 4.6 features fast removal of the high-priority
// item but slow insertion of new items. Write a program with a revised
// PriorityQ class that has fast O(1) insertion time but slower removal of the highpriority
// item. Include a method that displays the contents of the priority
// queue, as suggested in Programming Project 4.1.

class PriorityQueue {
    constructor(s) {
        this._sizeLimit = s;
        this._nItems = 0; 
        this._front; 
        this._rear = -1; 
        this._queue = []; 
    }

    insert(n) {
        if (this.isFull()) {
            throw new Error("Queue is full");
        }
        
        if (this._rear === this._sizeLimit - 1) {
            this._rear = -1; 
        }

        this._queue[++this._rear] = n; 
        return ++this._nItems;
    }


    remove(n) {
        var min = this._queue[this._front];

        for (var i; this._nItems; i) {

        }
    }

    peekMin() {}
    isEmpty() {}
    isFull() {}
}