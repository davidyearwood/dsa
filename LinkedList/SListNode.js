class SListNode {
    constructor(item, next = null) {
        this.item = item; 
        this.next = next; 
    }
}

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

    deleteNode(item) {
        var node = this.head; 
        while (node) {
            if (node.next.item === item) {

            }
            node = node.next;
        }
    }

    getSize() {
        return this.size; 
    }
}

var list = new SList(); 

list.insertFront(12);
list.insertFront(22);
list.insertFront(32);
list.insertFront(42);
list.insertFront(65);

list.deleteNode();