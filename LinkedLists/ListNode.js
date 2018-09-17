class SListNode {
    constructor(i, n) {
        this.item = i; 
        this.next = n || null; 
    }
}

class SList {
    constructor() {
        this.head = null;
        this.size = 0;  
    }

    insertFront(item) {
        this.head = new SListNode(item, this.head);
        return ++this.size;
    }
}



var l1 = new SList(); 
l1.insertFront(5); 



//      -------------         -------------         -------------
//      |     ----- |         |     ----- |         |     ----- |
//      | item| 7 | |         | item| 0 | |         | item| 6 | |
// l1-->|     ----- |    l2-->|     ----- |    l3-->|     ----- |
//      |     ----- |         |     ----- |         |     ----- |
//      | next| .-+-+-------->| next| .-+-+-------->| next| X | |
//      |     ----- |         |     ----- |         |     ----- |

// Finding the nth element in a linked list takes proporational to n elements 

console.log(l1);
