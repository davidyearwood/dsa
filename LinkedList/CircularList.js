const SListNode = require('../LinkedList/SListNode');

class CircularList {
    constructor() {
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    getFirst() {
        return this.isEmpty() ? null : this.tail.next.item;
    }

    getLast() {
        return this.isEmpty() ? null : this.tail.item;
    }

    addFirst(item) {
        if (this.getSize() === 0) {
            this.tail = new SListNode(item, null);
            this.tail.next = this.tail;
        } else {
            var head = this.tail.next;
            this.tail.next = new SListNode(item, head);
        }
        return ++this.size;
    }

    addLast(item) {
        this.addFirst(item);
        this.tail = this.tail.next;
        return this.size;
    }

    removeFirst() {
        if (this.isEmpty()) {
            return null;
        }

        var head = this.tail.next;
        if (head === this.tail) {
            this.tail = null;
        } else {
            this.tail.next = head.next; 
        }

        this.size--; 

        return head.item;
    }

    roate() {
        if (this.getSize() >= 2) {
            this.tail = this.tail.next;
        }
    }

    isEmpty() {
        return this.tail === null || this.getSize() === 0;
    }
}

module.exports = CircularList;