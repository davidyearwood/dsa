var DListNode = require('./DListNode');

class DList {
    constructor() {
        this._head = new DListNode();
        this._head.next = this._head;
        this._head.prev = this._head;
        this._size = 0;
    }

    removeBack() {
        if (this._head.prev !== this._head) {
            this._head.prev = this._head.prev.prev; 
            this._head.prev.next = this._head;
            this._size--;
        }
    }
}

module.exports = DList;