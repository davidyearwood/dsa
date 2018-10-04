const ListNode = require('./SListNode'); 

function isPalindrome(node) {
    var output = ""; 
    var reverseOutput = ""; 
    var n = node; 
    while(n !== null) {
        output = output + n.item; 
        reverseOutput = n.item + reverseOutput; 
        n = n.next; 
    }

    if (reverseOutput === output) {
        return true; 
    }

    return false; 
}

var list = new ListNode('C', new ListNode('A', new ListNode('D', new ListNode('A', new ListNode('M')))));
