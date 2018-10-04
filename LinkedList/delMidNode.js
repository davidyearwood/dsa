const ListNode = require('./SListNode'); 

function delMidNode(node) {
    var nextNode = node.next; 
    node.next = nextNode.next;
    node.item = nextNode.item; 
}

var middle = new ListNode("C", new ListNode("D", new ListNode("E", new ListNode("F"))));
var list = new ListNode("A", new ListNode("B", middle));

delMidNode(middle);

var i = list; 
while(i !== null) {
    console.log(i.item);
    i = i.next; 
}