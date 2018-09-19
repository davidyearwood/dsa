var SListNode = require('./SListNode');

class SList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    insertFront(item) {
        this.head = new SListNode(item, this.head);
        this.size++;
        if (this.getSize() === 1) {
            this.tail = this.head;
        }
    }

    insertEnd(item) {
        if (this.getSize() === 0) {
            this.insertFront(item);
        } else {
            var node = new SListNode(item, null);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    deleteFront() {
        if (this.isEmpty()) {
            throw new Error("List is empty");
        }

        var output = this.head.item;

        this.head = this.head.next;
        this.size--;

        if (this.getSize() === 0) {
            this.tail = this.head;
        }

        return output;
    }

    deleteEnd() {
        var runner = this.head;
        var pos = this.head.next;

        if (this.getSize() === 0 || this.head === null) {
            throw new Error("List is empty.")
        }

        if (pos === null) {
            this.head = null;
            return --this.size;
        }

        while (pos !== null) {
            if (pos.next === null) {
                runner.next = null;
                this.size--;
                break;
            }

            runner = pos;
            pos = pos.next;
        }

        return this.size;
    }

    printItems() {
        var node = this.head;
        var output = [];
        while (node) {
            output.push(node.item);
            node = node.next;
        }

        return output.join(", ");
    }

    first() {
        if (this.isEmpty()) {
            return null;
        }

        return this.head.item;
    }

    last() {
        if (this.isEmpty()) {
            return null;
        }

        return this.tail.item;
    }

    isEmpty() {
        return this.getSize() === 0 || this.head === null;
    }

    getSize() {
        return this.size;
    }
}

module.exports = SList;