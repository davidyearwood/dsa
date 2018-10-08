var Node = require('./SListNode');

// O(n)
function findMid(node, nth) {
    if (node === null) {
        return Math.ceil(nth / 2);
    }
    var middle = findMid(node.next, nth + 1); 

    if (nth === middle) {
        console.log(node.item); 
    }

    return middle; 
}
