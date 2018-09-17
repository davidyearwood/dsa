class SList {
    constructor() {
        this.head = null;
        this.size = 0;  
    }

    insertFront(item) {
        this.head = new ListNode(item, this.head);
        return ++this.size;
    }
}