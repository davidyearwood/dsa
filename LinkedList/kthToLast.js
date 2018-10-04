const ListNode = require('./SListNode'); 


function kthToLast(nth, node) {
    var n = node; 
    var s = []; 
    var kthItem; 

    while(n !== null) {
        s.push(n.item);
        n = n.next; 
    }

    for (var i = 0; i < nth; i++) {
        kThItem = s.pop(); 
    }

    return kThItem;
}

// finds the kth element, but doesn't return it.s
function kthLast(nth, list) {
    if (list === null) {
        return null; 
    }

    var pos = kthLast(nth, list.next) + 1; 

    if (nth === pos) {
        console.log(list.item);
    }

    return pos;

}
var list = new ListNode(5, new ListNode(7, new ListNode(6, new ListNode(1, new ListNode(5)))));

function kth(nth, node) {
    var size = 0; 
    var n = node; 
    while(n !== null) {
        size += 1; 
        n = n.next; 
    }
    
    var pos = size - nth; 
    var currentPos = 0; 
    n = node; 

    while(n !== null) {
        if (currentPos === pos) {
            return n.item;
        }
        
        currentPos += 1; 
        n = n.next;
    }
    return null;
}

console.log(kth(3, list));