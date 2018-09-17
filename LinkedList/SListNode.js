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

    printItems(item) {
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

function removeDuplicates(list) {
    var buffer = new SList();
    var a = buffer.head;
    var b = list.head;

    if (a === null) {
        buffer.insertFront(b.item);
    }

    while (b !== null) {
        a = buffer.head;
        while (a !== null) {
            if (a.item === b.item) {
                break;
            }

            if (a.next === null) {
                buffer.insertFront(b.item);
            }

            a = a.next; 
        }
        b = b.next;
    }

    return buffer;
}

var list = new SList();
list.insertFront(25);
list.insertFront(12);
list.insertFront(22);
list.insertFront(32);
list.insertFront(42);
list.insertFront(65);
list.insertFront(32);
list.insertFront(12);
list.insertFront(25);
list.insertFront(25);
list.insertFront(25);
list.insertFront(25);
list.insertFront(25);
list.insertFront(25);
list.insertFront(25);

var listWithoutDuplicates = removeDuplicates(list);


console.log(list.printItems());
console.log(listWithoutDuplicates.printItems());