var SListNode = require('./SListNode');

class SList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    insertFront(item) {
        this.head = new SListNode(item, this.head);
        this.size++;
    }

    deleteFront() {
        if (this.getSize() === 0) {
            throw new Error("List is empty");
        }
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;

        this.size--;
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

        while(pos !== null) {
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

    getSize() {
        return this.size;
    }
}

module.exports = SList; 